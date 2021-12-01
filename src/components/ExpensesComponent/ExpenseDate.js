import "./ExpenseDate.css";

const Date = (props) => {
  const date = props.dayMonthYear.toLocaleString("en-US", { day: "2-digit" });
  const month = props.dayMonthYear.toLocaleString("en-US", { month: "long" });
  const year = props.dayMonthYear.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{date}</div>
    </div>
  );
};
export default Date;
