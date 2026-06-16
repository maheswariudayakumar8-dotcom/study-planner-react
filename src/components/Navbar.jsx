import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Study Planner</h2>

      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/project">Project</Link>
    </nav>
  );
}

export default Navbar;