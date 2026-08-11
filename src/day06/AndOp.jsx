function AndOp() {
    let age = 20;
    let hasId = true;

    return (
        <div>
            <h2>AND Operator</h2>

            {age >= 18 && hasId && (
                <p>You are eligible.</p>
            )}
        </div>
    );
}

export default AndOp;