import "./styles.css";

function InputLoginField(sets) {
  return (
    <div className="username">
      <div className="icon">
        <svg
          color="antiquewhite"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1.2em"
          width="1.2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </div>
      <input
        type={sets.inputType}
        placeholder={sets.placeholder}
        autoComplete="off"
      />
    </div>
  );
}

export default InputLoginField;
