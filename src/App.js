import React, {useState, useEffect} from "react";
import Header from "./components/Header"
import Directory from "./components/Directory"

import getEmployees from "./utils/API";

function App() {
  const [employeesState, setEmployeesState] = useState([
    {
      dob: "",
      email: "",
      name: "",
      phone: "",
      picture: {
        thumbnail: ""
      },
      id: ""
    }
  ])

  useEffect(() => {
    getEmployees()
    .then(res => {
      setEmployeesState(res)
    })
    .catch(error => console.error(error));
    
  }, [])

  function handleClickEvent(e) {
    const newState = [...employeesState].sort((a,b) => (a.name > b.name ? 1 : -1))
    console.log(employeesState);
    setEmployeesState(newState);
  }



  return (
    <>
    <Header/>
    <Directory  employees={employeesState} handleClickEvent={handleClickEvent}/>
    </>
  );
}

export default App;
