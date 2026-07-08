import { useEffect, useState } from "react";

function AnimatedCounter({
  value,
  duration = 1000,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const increment =
      value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);

        clearInterval(timer);

        return;
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <>{count}</>;
}

export default AnimatedCounter;