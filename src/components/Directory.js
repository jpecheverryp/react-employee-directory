import React from "react";
import EmployeeRow from "./EmployeeRow"

function Directory({employees}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
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