import { useState, useContext, useEffect } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (email || password ) setTyping(true);
    const timer = setTimeout(() => setTyping(false), 1000);
    return () => clearTimeout(timer);
  }, [email, password]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !password) return setError("All fields are required");
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleLogin}>
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {typing && <small>Typing...</small>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;