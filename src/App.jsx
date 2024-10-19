import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import User from "./User";

function App() {
  function handeleClick() {
    alert("button clicked");
  }
  const handeleClick2 = () => alert("button 2 clicked");
  const addToFive = (num) => {
    alert(num + 3)
  };
  return (
    <>
      <h3>React Core Concept</h3>
      <Friends></Friends>
      <User></User>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handeleClick}>Click me</button>
      <button onClick={handeleClick2}>click2</button>
      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        third
      </button>
      <button onClick={() => addToFive(3)}>Fourth</button>
    </>
  );
}

export default App;
