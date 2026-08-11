import { useState } from "react"

function EditStudent({ student, updateStudent, cancelEdit }) {

    const [name, setName] = useState(student.name)
    const [email, setEmail] = useState(student.email)
    const [course, setCourse] = useState(student.course)

    function saveStudent() {

        const updatedData = {
            ...student,
            name: name,
            email: email,
            course: course
        }

        updateStudent(updatedData)
    }

    return (
        <div>
            <h2>Edit Student</h2>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />

            <br /><br />

            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
            />

            <br /><br />

            <input
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="Enter course"
            />

            <br /><br />

            <button onClick={saveStudent}>
                Update
            </button>

            <button onClick={cancelEdit}>
                Cancel
            </button>
        </div>
    )
}

export default EditStudent