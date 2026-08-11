import { useState } from "react"
import StudentList from "./StudentList"
import EditStudent from "./EditStudent"
import studentsData from "./api/studentapi"

function MainDay08() {

    const [students, setStudents] = useState(studentsData)
    const [selectedStudent, setSelectedStudent] = useState(null)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [course, setCourse] = useState("")

    function addStudent() {

        if (name === "" || email === "" || course === "") {
            alert("Please enter all details")
            return
        }

        const newStudent = {
            id: students.length + 1,
            name: name,
            email: email,
            course: course
        }

        setStudents([...students, newStudent])

        setName("")
        setEmail("")
        setCourse("")
    }

    function deleteStudent(id) {

        const newList = students.filter((student) => student.id !== id)

        setStudents(newList)
    }

    function editStudent(student) {
        setSelectedStudent(student)
    }

    function updateStudent(data) {

        const updatedList = students.map((student) => {
            if (student.id === data.id) {
                return data
            }

            return student
        })

        setStudents(updatedList)
        setSelectedStudent(null)
    }

    return (
        <div>

            <h1>Student Management</h1>

            <h3>Add New Student</h3>

            <input
                type="text"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Student Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="text"
                placeholder="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
            />

            <button onClick={addStudent}>
                Add Student
            </button>

            <hr />

            {selectedStudent ? (
                <EditStudent
                    student={selectedStudent}
                    updateStudent={updateStudent}
                    cancelEdit={() => setSelectedStudent(null)}
                />
            ) : (
                <StudentList
                    students={students}
                    onEdit={editStudent}
                    onDelete={deleteStudent}
                />
            )}

        </div>
    )
}

export default MainDay08