export function Hello(props) {
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}, you are{props.age} years-old</p>
    </div>
  );
}

function App() {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  const name = "Peter";
  const age = 10
  console.log("Hello from component");
  return (

    <div>
      <h1>Greetings</h1>
      <Hello name="George" age={26+10}/>
      <Hello name={name} age={age}/>


      <p>Hello World it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
}

export default App;
