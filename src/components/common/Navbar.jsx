import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/signup">Signup</Link>
    <Link to="/login">Login</Link>
    <Link to="/dashboard">Dashboard</Link>
  </nav>
);

export default Navbar;