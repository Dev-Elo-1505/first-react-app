import { useState } from "react";
import { Alert } from "./components/Alert";
import { Ex1Btn } from "./components/Ex1Btn/Ex1Btn";
import ListGroup from "./components/ListGroup";
import { Like } from "./components/Like";
import { FaCloudMoonRain } from "react-icons/fa6";
import Message from "./message";
import { produce } from "immer";
import { Navbar } from "./components/Navbar";
import { Cart } from "./components/Cart";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const items = ["Lagos", "Ota", "Isoko"];
  const handleClick = (item: string) => {
    console.log("clicked");
  };
  const [drink, setDrink] = useState({
    title: "Yoghurt",
    price: 6,
  });
  const [school, setSchool] = useState({
    uni: "covenant",
    college: {
      department: "eie",
      program: "Comp engr",
    },
  });
  const [friends, setFriends] = useState(["anu", " dominion", " deborah"]);
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
    { id: 3, title: "Bug 3", fixed: false },
  ]);
  const [cartItems, setCartItems] = useState(['Product 1', 'Product 2', 'Product 3']);
  const clickHandle = () => {
    setDrink({ ...drink, price: 7 });
    setSchool({
      ...school,
      college: { ...school.college, program: "comp sci" },
    });
    setFriends([...friends, " motun"]);
    setFriends(friends.filter((friend) => friend !== "deborah"));
    setFriends(friends.map((friend) => (friend === "anu" ? "philip" : friend)));
    // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug));
    setBugs(produce(draft =>{
      const bug = draft.find(bug => bug.id ===1);
      if(bug) bug.fixed = true;
    }))
  };
  return (
    <div>
      <Navbar cartItemsCount={cartItems.length}></Navbar>
      <Cart cartItems={cartItems} onClear={()=> setCartItems([])}></Cart>
      {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'Fixed' : 'New Bug'}</p>)}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Ex1Btn onClick={() => setAlertVisibility(true)}>
        A very cool button
      </Ex1Btn>
      <p>{drink.price}</p>
      <p>{school.college.program}</p>
      <p>{friends}</p>
      
      <button onClick={clickHandle}>Update price</button>
      <Like onClick={() => console.log("liked")}></Like>

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleClick}
      ></ListGroup>
      <FaCloudMoonRain style={{ color: "purple", fontSize: "100px" }} />
      <Message></Message>
      <Message></Message>
      <Message></Message>
      <Message></Message>
    </div>
  );
}

export default App;
