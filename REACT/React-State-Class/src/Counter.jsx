import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(1);

  let intCount = () => {
    setCount((currCount) => {
      return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
    });
  };
  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={intCount}>Increase Count</button>
    </div>
  );
}
