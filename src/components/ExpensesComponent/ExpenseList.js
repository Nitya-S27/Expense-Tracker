import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  return props.items.length === 0 ? (
    <h2 className="expenses-list__fallback">Found no expenses.</h2>
  ) : (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem key={expense.id} exp_detail={expense} />
      ))}
    </ul>
  );
};
export default ExpenseList;
