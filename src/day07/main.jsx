
import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
    const [students, setStudents] = useState([]);

    // Fetch data from API
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setStudents(response.data);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="container mt-4">

            <h2 className="text-center mb-4">
                Students List
            </h2>

            <table className="table table-bordered border border-4">

                <thead>
                    <tr>
                        <th className="border border-4 p-3">
                            Post Id
                        </th>

                        <th className="border border-4 p-3">
                            ID
                        </th>

                        <th className="border border-4 p-3">
                            Name
                        </th>

                        <th className="border border-4 p-3">
                            Email
                        </th>

                        <th className="border border-4 p-3">
                            Body
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((e) => (
                        <tr key={e.id}>

                            <td className="border border-2 p-2">
                                {e.postId}
                            </td>

                            <td className="border border-2 p-2">
                                {e.id}
                            </td>

                            <td className="border border-2 p-2">
                                {e.name}
                            </td>

                            <td className="border border-2 p-2">
                                {e.email}
                            </td>

                            <td className="border border-2 p-2">
                                {e.body}
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
};

export default Main;

