import { useState, useContext, useEffect } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { validateEmail, validatePassword } from "../../utils/validation";

const SignupForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [errors, setErrors] = useState([]);
  const [typing, setTyping] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  useEffect(() => {
    if (password) {
      setTyping(true);
      const timer = setTimeout(() => {
        const validationErrors = [];

        if (!validatePassword(password)) {
          validationErrors.push(
            "Password must be at least 8 characters long, include one uppercase letter, one number, and one special character."
          );
        }

        setErrors(validationErrors);
        setTyping(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = [];

    if (!email || !password || !name) formErrors.push("All fields are required");  // Check if name is filled
    if (!validateEmail(email)) formErrors.push("Invalid email format");
    if (!validatePassword(password)) formErrors.push("Invalid password format");

    if (formErrors.length > 0) {
      setErrors(formErrors);
      return;
    }

    setUser({ email, name })
    localStorage.setItem("user", JSON.stringify({ email, name }));
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      {typing && <small>Validating...</small>}
      {errors.map((err, i) => (
        <p key={i} style={{ color: "red" }}>
          {err}
        </p>
      ))}
      <Button type="submit">Signup</Button>
    </form>
  );
};

export default SignupForm;
