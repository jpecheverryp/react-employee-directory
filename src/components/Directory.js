import React from "react";
import EmployeeRow from "./EmployeeRow"

function Directory({ employees, handleClickEvent }) {

    return (
        <table>
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
                {employees.map(employee => {
                    return <EmployeeRow key={employee.id} {...employee} />
                })}

            </tbody>
        </table>
    )
};

export default Directory;