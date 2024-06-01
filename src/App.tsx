import { useState } from "react";
import { Alert } from "./components/Alert";
import { Ex1Btn } from "./components/Ex1Btn";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false)
    return (
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>My Alert</Alert>}
      <Ex1Btn onClick={()=> setAlertVisibility(true)} color="secondary">
        A very cool button
      </Ex1Btn>
    </div>
  );
}

export default App;
