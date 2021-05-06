import React from "react";
import EmployeeRow from "./EmployeeRow"
import './Directory.css'
function Directory({ employees, handleClickEvent, search }) {
    const filteredEmployees = employees.filter(employee => 
        employee.name.toLowerCase().includes(search.toLowerCase())
            ||
        employee.email.toLowerCase().includes(search.toLowerCase())

    )
    return (
        <table className="employees-table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th onClick={(e) => handleClickEvent(e)}>Name</th>
                    <th onClick={(e) => handleClickEvent(e)}>Phone</th>
                    <th onClick={(e) => handleClickEvent(e)}>Email</th>
                    <th onClick={(e) => handleClickEvent(e)}>DOB</th>
                </tr>
            </thead>
            <tbody>
                {filteredEmployees.map(employee => {
                    return <EmployeeRow key={employee.id} {...employee} />
                })}

            </tbody>
        </table>
    )
};

export default Directory;