import { useEffect, useState } from "react";

function AnimatedCounter({
  value,
  duration = 1200,
  decimals = 0,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 3);

      setCount(value * eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [value, duration]);

  return (
    <>
      {count.toFixed(decimals)}
    </>
  );
}

export default AnimatedCounter;