function DemoMode() {
  const loggedIn = true;
  return (
    <div>
      <h2>Login Status</h2>
      {loggedIn ? ( <p>You are logged in.</p>) : (<p>Please login.</p> )}
    </div>
  );
}
export default DemoMode;