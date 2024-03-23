import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const data = (set) => ({
  token: null,
  expire: 3240000,
  refresh: async () => {
    try {
      const endpoint = `${import.meta.env.VITE_TOKEN}`;
      const config = {};
      config.method = "POST";
      config.headers = {};
      config.headers["Content-Type"] = "application/x-www-form-urlencoded";
      config.body = new URLSearchParams({
        grant_type: "client_credentials",
        client_id: `${import.meta.env.VITE_CLIENT}`,
        client_secret: `${import.meta.env.VITE_SECRET}`,
      });
      const response = await fetch(endpoint, config);
      if (response.ok) {
        const { access_token } = await response.json();
        set({ token: access_token });
      } else {
        throw new Error("Error al refrescar el token:", response.statusText);
      }
    } catch (error) {
      console.error("Error al refrescar el token:", error.message);
    }
  },
});

const storage = {
  name: "token",
  storage: createJSONStorage(() => localStorage),
};

const useTokenStore = create(
  persist((set) => {
    const state = data(set);
    const check = () => {
      if (state.expire && typeof state.refresh === "function") {
        setTimeout(async () => {
          await state.refresh();
          check();
        }, state.expire);
      }
    };
    state.refresh();
    check();

    return state;
  }, storage)
);

export default useTokenStore;
