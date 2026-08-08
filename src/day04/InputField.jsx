import { useState } from "react";
function InputField() {
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <div>
      <h2>Input Field</h2>
      <input
        type="text"
        placeholder="Type something"
        value={message}
        onChange={handleChange}
      />
      <p>You typed: {message}</p>
    </div>
  );
}
export default InputField;