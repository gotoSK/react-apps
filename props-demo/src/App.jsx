import Student from "./Student"

function App() {
  return (
    <>
    <Student name="Spongebob" age={30} isStudent={false}/>
    <Student name="Patrick" age={33} isStudent={false}/>
    <Student name="Nobita" age={11} isStudent={true}/>
    <Student />
    <Student name="Doremon" isStudent={false}/>
    </>
  );
}

export default App
