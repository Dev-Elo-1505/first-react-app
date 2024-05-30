import ListGroup from "./components/ListGRoup";

function App() {
  let items = [
    "Biotechnology",
    "Computer Science",
    "Accounting",
    "Microbiology",
    "Architecture",
  ];
  return <div><ListGroup items={items} heading='Programs' /></div>
}

export default App;