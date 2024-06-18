// import { useState } from "react";
// import { ExpenseList } from "./expense-tracker/components/ExpenseList";
// import { ExpenseFilter } from "./expense-tracker/components/ExpenseFilter";
// import categories from "./expense-tracker/categories";
// import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import { AxiosError } from "axios";
import apiClient, { CanceledError } from "./services/api-client";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
// import { ProductList } from "./components/ProductList";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<User[]>("/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
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
  // const [category, setCategory] = useState("");
const deleteUser = (user: User) => {
  const originalUsers = [...users]
  setUsers(users.filter(u => u.id !== user.id));
  apiClient.delete('/users' + user.id)
  .catch(err => {
    setError(err.message);
    setUsers(originalUsers);
  })
}
const addUser = ()=> {
  const originalUser = [...users];
  const newUser = {id: 0, name: 'Addisi Joy'};
  setUsers([newUser, ...users]);

  apiClient.post('/users', newUser)
  .then(({data: savedUser}) => setUsers([savedUser,...users]))
  .catch(err => {
    setError(err.message);
    setUsers(originalUser);
  })
}

const updateUser = (user: User)=> {
  const originalUser = [...users];
  const updatedUser = {...user, name: user.name + '!'};
  setUsers(users.map(u => u.id === user.id ? updatedUser : u))

  apiClient.patch('/users/' + user.id, updateUser)
  .catch(err => {
    setError(err.message);
    setUsers(originalUser)
  })
}
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>Add</button>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between">
            {user.name}
            <div>
              <button className="btn btn-outline-secondary mx-2" onClick={()=> updateUser(user)}>Update</button>
              <button className="btn btn-outline-danger" onClick={()=> deleteUser(user)}>Delete</button>
            </div>
          </li>
        ))}
        {/* <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} /> */}
      </ul>
    </>
  );
}

export default App;
