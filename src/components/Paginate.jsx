import React from "react";
import usePage from "../hooks/usePage";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
const Paginate = () => {
  const submit = (e) => e.preventDefault();
  const increment = usePage((state) => state.increment);
  const decrement = usePage((state) => state.decrement);
  const page = usePage((state) => state.page);
  return (
    <form onSubmit={submit}>
      <button type="button" onClick={decrement} disabled={page <= 0}>
        <MdArrowLeft />
      </button>
      <span>{page}</span>
      <button type="button" onClick={increment}>
        <MdArrowRight />
      </button>
    </form>
  );
};

export default Paginate;
