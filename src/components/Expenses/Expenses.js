import { useState } from 'react/cjs/react.development';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filteredExpenses = props.items.filter(expense => {
       return expense.date.getFullYear().toString() === filteredYear;
    })

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/> 
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </li>
    )
}

export default Expenses;