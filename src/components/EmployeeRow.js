import React from "react";

function EmployeeRow(props) {

    const emailHref = 'mailto:' + props.email
    return (
        <tr>
            <td>
                <img alt={props.name + " picture"} src={props.picture.thumbnail} />
            </td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td><a href={emailHref}>{props.email}</a></td>
            <td>{props.dob}</td>
        </tr>
    )
}

export default EmployeeRow;