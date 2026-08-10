function Events() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div className="card">
      <h2>Events</h2>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default Events;