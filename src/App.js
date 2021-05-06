import React, { useState, useEffect } from "react";
import Header from "./components/Header"
import Directory from "./components/Directory"
import Search from "./components/Search"
import getEmployees from "./utils/API";
import './App.css'

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

  const [orderState, setOrderState] = useState({
    column: '',
    direction: ''
  })

  const [searchState, setSearchState] = useState('')

  useEffect(() => {
    getEmployees()
      .then(res => {
        setEmployeesState(res)
      })
      .catch(error => console.error(error));

  }, [])

  function handleSearchChange(e) {
    setSearchState(e.target.value)
  }

  function handleClickEvent(e) {
    // Check which column is being selected
    const column = e.target.innerText.toLowerCase();
    let newState = []
    let newDirection = ''
    // Check if we are already ordering by that column
    if (orderState.column === column && orderState.direction === 'ascending') {
      // Order to descending
      newState = [...employeesState].sort((a, b) => (a[column] < b[column] ? 1 : -1))
      newDirection = 'descending';
    } else {
      // Order to ascending
      newState = [...employeesState].sort((a, b) => (a[column] > b[column] ? 1 : -1))
      newDirection = 'ascending';
    }
    setEmployeesState(newState);
    setOrderState({
      column: column,
      direction: newDirection
    })

  }



  return (
    <>
      <Header />
      <Search search={searchState} handleSearchChange={handleSearchChange} />
      <Directory search={searchState} employees={employeesState} handleClickEvent={handleClickEvent} />
    </>
  );
}

export default App;
