import React from "react";
import usePage from "../hooks/usePage";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import Style from "../styles/Paginate.module.css";
const Paginate = () => {
  const submit = (e) => e.preventDefault();
  const increment = usePage((state) => state.increment);
  const decrement = usePage((state) => state.decrement);
  const page = usePage((state) => state.page);
  return (
    <form onSubmit={submit} className={Style.paginate}>
      <button type="button" onClick={decrement} disabled={page <= 0}>
        <MdArrowLeft />
      </button>
      <span>{page}</span>
      <button type="button" onClick={increment} disabled={page >= 60}>
        <MdArrowRight />
      </button>
    </form>
  );
};

export default Paginate;
