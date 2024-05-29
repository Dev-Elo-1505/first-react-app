//Use pascalcasing naming conventions for react applications
function Message() {
    // Jsx- Javascript XML
    const name = 'Elo';
    if(name)
        return <h1>Hello {name}</h1>
    else return <h1>Hello World</h1>
}

export default Message;