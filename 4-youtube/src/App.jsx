import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} />
      <UserGreeting isLoggedIn={false} username="stukervitor" />
    </>
  );
}

export default App
