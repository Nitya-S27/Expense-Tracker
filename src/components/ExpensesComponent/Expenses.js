import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
// import expenses from "./exepnse";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const FilterExpenseHandler = (yearChosen) => {
    setYear(yearChosen);
  };
  const FilterExpenses = props.items.filter((exp) => {
    return exp.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onFilterExpences={FilterExpenseHandler} />
      {FilterExpenses.map((expense) => (
        <ExpenseItem key={expense.id} exp_detail={expense} />
      ))}
    </Card>
  );
};
export default Expenses;
