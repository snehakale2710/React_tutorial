import { useState } from "react";

function OnSubmit() {

    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        alert("Name: " + name);
    }

    return (
        <div>
            <h2>On Submit Event</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <button type="submit">
                    Submit
                </button>

            </form>
        </div>
    );
}

export default OnSubmit;