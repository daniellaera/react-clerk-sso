import ExpensesActions from "../components/ExpensesActions"
import { Outlet } from 'react-router-dom'

const ExpensesLayout = () => {
    return (
        <>
            <ExpensesActions />
            <Outlet />
        </>
    )
}

export default ExpensesLayout