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

  return (
    <>
    <Header/>
    <Directory employees={employeesState}/>
    </>
  );
}

export default App;
