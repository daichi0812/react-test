import { useEffect, useState, useContext, useRef, useReducer, useMemo } from "react";
import './App.css'
import ShinCodeContext from "./main";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const shincodeInfo = useContext(ShinCodeContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1);
  };

  //useMemo ブラウザのキャッシュに保存するメモ化
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);

  const square= () => {
    let i = 0;
    while(i < 2){
      i++
    }
    return count01 * count02;
  };

  useEffect(() => {
    console.log("Hello Hooks");
    //setCount(count + 1);
  }, [count]);

  const handleRef = () => {
    console.log(ref.current.value);
    console.log(ref.current.offsetHeight);
  };

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>＋</button>
      <p>
        {count}
      </p>
      <hr />
      <h1>useCotext</h1>
      <p>{shincodeInfo.name}</p>
      <p>{shincodeInfo.age}</p>

      <hr />
      <h1>useRef</h1>
      <input type="" ref={ref} />
      <button onClick={handleRef}>UseRef</button>

      <hr />
      <h1>useReducer</h1>
      <p>カウント : {state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>＋</button>
      <button onClick={() => dispatch({ type: "decrement" })}>ー</button>

      <hr />
      <h1>useMemo</h1>
      <div>カウント1 : {count01}</div>
      <div>カウント2 : {count02}</div>
      <div>結果: {square()}</div>
      <button onClick={() => setCount01(count01 + 1)}>＋</button>
      <button onClick={() => setCount02(count02 + 1)}>ー</button>
    </div>
  )
}

export default App
