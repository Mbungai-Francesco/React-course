import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
	// const expenseDate = new Date(2021, 2, 24)
	// const expenseTitle = 'Health Insurance'
	// const expenseAmount = 50000

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;
