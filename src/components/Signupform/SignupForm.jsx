import React, { useState } from 'react';
import './SignupForm.css';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

const SignupForm = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setSubmitted(false);
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const checkStrength = (password) => {
    if (password.length === 0) return '';
    if (password.length < 6) return 'Weak';
    if (/[A-Z]/.test(password) && /\d/.test(password)) return 'Strong';
    return 'Medium';
  };

  const validate = () => {
    const newErrors = {};
    if (form.username.length < 3) newErrors.username = 'Username too short!';
    if (!form.email.includes('@') || !form.email.includes('.')) newErrors.email = 'Invalid email!';
    if (form.password.length < 6) newErrors.password = 'Password too short!';
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match!';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log('Form submitted:', form);
      setSubmitted(true);
      setErrors({});
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <InputField
        label="Username"
        type="text"
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Enter username"
        error={errors.username}
      />

      <InputField
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter email"
        error={errors.email}
      />

      <div className="password-section">
        <label>Password</label>
        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={form.password}
            onChange={(event) => {
              handleChange(event);
              setStrength(checkStrength(event.target.value));
            }}
            placeholder="Enter password"
          />
          <span onClick={togglePasswordVisibility}>
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        {strength && <p className={`strength ${strength.toLowerCase()}`}>Strength: {strength}</p>}
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <InputField
        label="Confirm Password"
        type={showPassword ? 'text' : 'password'}
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm password"
        error={errors.confirmPassword}
      />

      <SubmitButton text="Register" disabled={Object.keys(errors).length > 0} />

      {submitted && <p className="success">Successfully Registered!</p>}
    </form>
  );
};

export default SignupForm;
