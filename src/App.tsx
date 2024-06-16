import { useState } from "react";
import { ExpenseList } from "./expense-tracker/components/ExpenseList";


function App() {
const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
    { id: 2, description: 'bbb', amount: 10, category: 'Utilities'},
    { id: 3, description: 'ccc', amount: 10, category: 'Utilities'},
]);

if (expenses.length === 0) return null;

 return (
  <>
  <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} />
  </>
 )
}

export default App;
