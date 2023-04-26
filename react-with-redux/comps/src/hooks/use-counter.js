import { useState, useEffect } from "react";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount((currentCount) => currentCount + 1);
  };

  return {
    count,
    increment,
  };
}

export default useCounter;
