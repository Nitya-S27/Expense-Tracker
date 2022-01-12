import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  const FilterExpenseHandler = (yearChosen) => {
    setYear(yearChosen);
  };
  const FilterExpenses = props.items.filter((exp) => {
    return exp.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onFilterExpences={FilterExpenseHandler} />
      <ExpenseChart expenses={FilterExpenses} />
      <ExpenseList items={FilterExpenses} />
    </Card>
  );
};
export default Expenses;
