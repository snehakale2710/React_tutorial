function KeyList() {

    let fruits = ["Apple", "Mango", "Banana", "Orange"];

    return (
        <div>
            <h2>List with Key</h2>

            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

export default KeyList;