const Input = ({ label, type, value, onChange, onBlur }) => (
    <div className="input-container">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
  
  export default Input;