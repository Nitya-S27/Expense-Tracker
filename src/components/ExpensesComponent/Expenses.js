import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import expenses from "./exepnse";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const FilterExpenses = (yearChosen) => {
    setYear(yearChosen);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onFilterExpences={FilterExpenses} />
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} exp_detail={expense} />
      ))}
    </Card>
  );
};
export default Expenses;
