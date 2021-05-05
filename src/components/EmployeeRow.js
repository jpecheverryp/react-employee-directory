import React from "react";

function EmployeeRow(props) {
    console.log(props);
    return (
        <tr>
            <td>
                <img alt={props.name + " picture"} src={props.picture.thumbnail} />
            </td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob.date}</td>
        </tr>
    )
}

export default EmployeeRow;