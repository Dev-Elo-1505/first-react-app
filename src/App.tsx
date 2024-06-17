// import { useState } from "react";
// import { ExpenseList } from "./expense-tracker/components/ExpenseList";
// import { ExpenseFilter } from "./expense-tracker/components/ExpenseFilter";
// import categories from "./expense-tracker/categories";
// import ExpenseForm from "./expense-tracker/components/ExpenseForm";

import { useEffect, useRef } from "react";

function App() {
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const [expenses, setExpenses] = useState([
  //   { id: 1, description: "aaa", amount: 10, category: "Utilities" },
  //   { id: 2, description: "bbb", amount: 10, category: "Utilities" },
  //   { id: 3, description: "ccc", amount: 10, category: "Utilities" },
  // ]);

  // if (expenses.length === 0) return null;

  // const visibleExpenses = selectedCategory
  //   ? expenses.filter((e) => e.category === selectedCategory)
  //   : expenses;
  // return (
  //   <>
  //     <div className="mb-5">
  //       <ExpenseForm
  //         onSubmit={(expense) =>
  //           setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
  //         }
  //       />
  //     </div>
  //     <div className="mb-3">
  //       <ExpenseFilter
  //         onSelectCategory={(category) => setSelectedCategory(category)}
  //       />
  //     </div>
  //     <ExpenseList
  //       expenses={visibleExpenses}
  //       onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
  //     />
  //   </>
  // );
  const ref = useRef<HTMLInputElement>(null);
  useEffect(()=> {
    if(ref.current) ref.current.focus();
  });
  useEffect(()=>{
    document.title="My First React App";
  })
  return <><input ref={ref} type="text" className="form-control" /></>;
}

export default App;
