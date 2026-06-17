import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Study Planner</h1>

      <p>
        Organize your study tasks, track progress and stay productive.
      </p>

      <div
        style={{
          background: "white",
          width: "350px",
          margin: "20px auto",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        <h2>Study Counter</h2>

        <h3>{count}</h3>

        <button onClick={() => setCount(count + 1)}>
          Increase Count
        </button>
      </div>

      <div
        style={{
          background: "white",
          width: "350px",
          margin: "20px auto",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        <h2>Mission 3 Project</h2>
        <p>Built using React, Vite, React Router and useState.</p>
      </div>
    </div>
  );
}

export default Home;