import React from "react";
// import { ReactDOM } from "react";
import Expenses from "./components/ExpensesComponent/Expenses";
import NewExpense from "./components/InputExpenses/NewExpense";

const App = () => {
  const addExpenseHandler = (expenses) => {
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddingExpense={addExpenseHandler} />
      <Expenses />
    </div>
  );
};

export default App;
