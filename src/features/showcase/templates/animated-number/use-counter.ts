import { useState } from "react";

const INCREMENT_AMOUNT = 1000;

export default function useCounter() {
  const [count, setCount] = useState(1000);

  const increment = () => setCount(count + INCREMENT_AMOUNT);
  const decrement = () => setCount(count - INCREMENT_AMOUNT);

  return {
    count,
    increment,
    decrement,
    reset: () => setCount(0),
  };
}
