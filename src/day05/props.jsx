function Student({ name, course }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Course: {course}</p>
    </div>
  );
}

function Props() {
  return (
    <div className="card">
      <h2>Props</h2>

      <Student name="Sneha" course="B.Sc. ECS" />
      <Student name="Rahul" course="BCA" />
    </div>
  );
}

export default Props;