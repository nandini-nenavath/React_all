import { useState } from "react";
export default function App1() {
  const [result, setResult] = useState("");
  const clear = () => {
    setResult("");
  };
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const back = (e) => {
    setResult(result.slice(0, result.length - 1));
  };
  const res = () => {
    setResult(eval(result));
  };
  return (
    <div>
      <input value={result} />
      <br></br>
      <button onClick={clear}>Clear</button>
      <button onClick={back}>C</button>
      <button name="9" onClick={handleClick}>
        9
      </button>
      <br></br>
      <button name="8" onClick={handleClick}>
        8
      </button>
      <button name="7" onClick={handleClick}>
        7
      </button>
      <button name="6" onClick={handleClick}>
        6
      </button>
      <br></br>
      <button name="5" onClick={handleClick}>
        5
      </button>
      <button name="4" onClick={handleClick}>
        4
      </button>
      <button name="3" onClick={handleClick}>
        3
      </button>
      <br></br>
      <button name="2" onClick={handleClick}>
        2
      </button>
      <button name="1" onClick={handleClick}>
        1
      </button>
      <button name="0" onClick={handleClick}>
        0
      </button>
      <br></br>
      <button name="/" onClick={handleClick}>
        Divide
      </button>
      <button name="*" onClick={handleClick}>
        Multiply
      </button>
      <button name="+" onClick={handleClick}>
        Add
      </button>
      <br></br>
      <button name="-" onClick={handleClick}>
        Sub
      </button>
      <button onClick={res}>result</button>
    </div>
  );
}
