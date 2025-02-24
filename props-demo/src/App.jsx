import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
    <UserGreeting isLoggedIn={true} uname="mr_depp"/>
    <UserGreeting />

    <br />
    <Student name="Spongebob" age={30} isStudent={false}/>
    <Student name="Patrick" age={33} isStudent={false}/>
    <Student name="Nobita" age={11} isStudent={true}/>
    <Student />
    <Student name="Doremon" isStudent={false}/>
    </>
  );
}

export default App
