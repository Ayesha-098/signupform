export const validateEmail = (email) => {
    const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return mail.test(String(email).toLowerCase());
  };
  
export const validatePassword = (password) => {
    const UpperCase = /[A-Z]/.test(password);
    const Number = /[0-9]/.test(password);
    const Special = /[!@#$%^&*]/.test(password);
    return password.length >= 8 && UpperCase && Number && Special;
  };
