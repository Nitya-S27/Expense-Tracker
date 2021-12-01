import React, { useState } from "react";
import "./ExpenseItem.css";
import Date from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.exp_detail.title);
  const clickHandler = () => {
    setTitle("Updated!!!");
  };

  return (
    <Card className="expense-item">
      <Date dayMonthYear={props.exp_detail.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.exp_detail.amount}</div>
        <button onClick={clickHandler}>Button</button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
