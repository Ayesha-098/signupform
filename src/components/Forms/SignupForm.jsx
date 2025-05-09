import { useState, useContext, useEffect } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { validateEmail, validatePassword } from "../../utils/validation";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [errors, setErrors] = useState([]);
  const [typing, setTyping] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  useEffect(() => {
    if (password) {
      setTyping(true);
      const timer = setTimeout(() => {
        const strength = getPasswordStrength(password);
        setPasswordStrength(strength);
        setTyping(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [password]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = [];

    if (!email || !password || !name) formErrors.push("All fields are required");
    if (!validateEmail(email)) formErrors.push("Invalid email format");
    if (!validatePassword(password)) formErrors.push("Invalid password format");

    if (formErrors.length > 0) {
      setErrors(formErrors);
      return;
    }

    const userData = { 
    email, 
    name,
    password: btoa(password)
  };
  setUser(userData);
  localStorage.setItem("user", JSON.stringify(userData));
  navigate("/dashboard");
  };

  const getPasswordStrength = (password) => {
    const lengthCriteria = password.length >= 8;
    const numberCriteria = /[0-9]/.test(password);
    const uppercaseCriteria = /[A-Z]/.test(password);
    const specialCharacterCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (lengthCriteria && numberCriteria && uppercaseCriteria && specialCharacterCriteria) {
      return "Strong";
    } else if (lengthCriteria && (numberCriteria || uppercaseCriteria)) {
      return "Medium";
    } else {
      return "Weak";
    }
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
        <p>Password Strength: <strong>{passwordStrength}</strong></p>
      <Button type="submit">Signup</Button>
    </form>
  );
};

export default SignupForm;
