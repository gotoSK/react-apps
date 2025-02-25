import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";

function App() {
  const actors = [
    {name: "Leonardo DiCaprio", rating: 89},
    {name: "Ana de Armas", rating: 70},
    {name: "Tom Cruise", rating: 85},
    {name: "Christian Bale", rating: 87},
    {name: "Cillian Murphy", rating: 86},
    {name: "Timothee Chalamet", rating: 70}
  ];
  const movies = [
    {name: "Inception", rating: 93},
    {name: "Barbie", rating: 45}
  ];
  return (
    <>
    {/* list rendering */}
    {actors.length > 0 && <List items={actors} />}
    {movies.length > 0 && <List items={movies} />}

    {/* <UserGreeting isLoggedIn={true} uname="mr_depp"/>
    <UserGreeting />

    <br />
    <Student name="Spongebob" age={30} isStudent={false}/>
    <Student name="Patrick" age={33} isStudent={false}/>
    <Student name="Nobita" age={11} isStudent={true}/>
    <Student />
    <Student name="Doremon" isStudent={false}/> */}
    </>
  );
}

export default App
