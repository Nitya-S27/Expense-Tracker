import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formVisible, setFormVisible] = useState(false);

  const saveExpenseDataHandler = (eneteresExpenseData) => {
    const expenseData = {
      ...eneteresExpenseData,
      id: Math.random().toString(),
    };
    props.onAddingExpense(expenseData);
  };
  const showFormHandler = (initialState) => {
    setFormVisible(initialState);
  };

  return (
    <div className="new-expense">
      {formVisible ? null : (
        <button className="button-lite" onClick={showFormHandler} type="submit">
          Add New Expense
        </button>
      )}
      {formVisible ? (
        <ExpenseForm
          buttonClickHandler={showFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : null}
    </div>
  );
};
export default NewExpense;
