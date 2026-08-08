import { useState } from "react";
function CounterName() {
  const [name, setName] = useState("Guest");
  const updateName = () => {
    setName("Sneha");
  };
  return (
    <div>
      <h2>Name</h2>
      <p>Hello, {name}</p>
      <button onClick={updateName}>
        Change Name
      </button>
    </div>
  );
}
export default CounterName;