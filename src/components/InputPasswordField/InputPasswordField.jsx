import React, { useState } from "react";
import "./styles.css";

function InputPasswordField(sets) {
  const [password, setPassword] = useState(""); // State to manage the password value

  const handleChange = (event) => {
    setPassword(event.target.value); // Update the password state as the user types
  };

  return (
    <div className="password">
      <div className="icon">
        <svg
          color="antiquewhite"
          stroke="currentColor"
          fill="none"
          strokeWidth="2" // Corrected attribute name
          viewBox="0 0 24 24"
          strokeLinecap="round" // Corrected attribute name
          strokeLinejoin="round" // Corrected attribute name
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      </div>
      <input
        type={sets.inputType}
        placeholder={sets.placeholder}
        value={password} // Use state variable for value
        onChange={handleChange} // Handle changes and update state
      />
    </div>
  );
}

export default InputPasswordField;
