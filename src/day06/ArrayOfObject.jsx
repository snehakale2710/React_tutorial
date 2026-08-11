function ArrayOfObject() {

    let students = [
        { id: 1, name: "Sneha", course: "B.Sc" },
        { id: 2, name: "Rahul", course: "BCA" },
        { id: 3, name: "Priya", course: "MCA" }
    ];

    return (
        <div>
            <h2>Array of Objects</h2>

            {students.map((student) => (
                <p key={student.id}>
                    {student.id} - {student.name} - {student.course}
                </p>
            ))}
        </div>
    );
}

export default ArrayOfObject;