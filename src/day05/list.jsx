function List() {
  const students = ["Sneha", "Rahul", "Priya", "Amit"];

  return (
    <div className="card">
      <h2>List Rendering</h2>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;