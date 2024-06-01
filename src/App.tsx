import { useState } from "react";
import { Alert } from "./components/Alert";
import { Ex1Btn } from "./components/Ex1Btn/Ex1Btn";
import ListGroup from "./components/ListGroup";
import { Like } from "./components/Like";
import { FaCloudMoonRain } from "react-icons/fa6";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false)
  
  const items = ['Lagos', 'Ota', 'Isoko']
  const handleClick = (item: string) => {
    console.log('clicked')
  }
    return (
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>My Alert</Alert>}
      <Ex1Btn onClick={()=> setAlertVisibility(true)}>
        A very cool button
      </Ex1Btn>
        <Like onClick={()=>console.log('liked')}></Like>
      
      <ListGroup items={items} heading="Cities" onSelectItem={handleClick}></ListGroup>
      <FaCloudMoonRain style={{color: 'purple', fontSize: '100px'}}/>
    </div>
  );
}

export default App;
