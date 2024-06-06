//Use pascalcasing naming conventions for react applications

let count = 0;

function Message() {
  // Jsx- Javascript XML
  const name = "Elo";
  console.log('Message', count);
  count++;
  if (name)
    return (
      <>
        <h1>Hello {name}</h1>
        <p>Message {count}</p>
        
      </>
    );
  else return <h1>Hello World</h1>;
}

export default Message;
