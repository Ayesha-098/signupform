import React from 'react';

const SubmitButton = ({ text, disabled }) => (
  <button type="submit" disabled={disabled}>
    {text}
  </button>
);

export default SubmitButton;
