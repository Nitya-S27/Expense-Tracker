import React, { useState } from "react";
import "./ExpenseItem.css";
import Date from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <Date dayMonthYear={props.exp_detail.date} />
        <div className="expense-item__description">
          <h2>{props.exp_detail.title}</h2>
          <div className="expense-item__price">${props.exp_detail.amount}</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
