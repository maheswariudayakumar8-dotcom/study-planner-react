import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Home Page</h2>

      <h3>Study Counter: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default Home;