import { Link } from 'react-router-dom';

const ExpensesActions = () => {
  return (
    <div>
      <Link to="/expenses/new">Add Expense</Link>
    </div>
  );
}

export default ExpensesActions;