import React, { useState } from "react";
// import { ReactDOM } from "react";
import expenses from "./components/ExpensesComponent/exepnse";
import Expenses from "./components/ExpensesComponent/Expenses";
import NewExpense from "./components/InputExpenses/NewExpense";

const App = () => {
  const [exp, setExp] = useState(expenses);

  const addExpenseHandler = (expense_data) => {
    setExp((prevExp) => {
      return [expense_data, ...prevExp];
    });
  };
  // const handleFilteredExpenses = (chosenYear) => {
  //   return exp.filter((exenses) => expenses.date.getFuchosenYear);
  // };

  return (
    <div>
      <NewExpense onAddingExpense={addExpenseHandler} />
      <Expenses items={exp} />
    </div>
  );
};

export default App;
