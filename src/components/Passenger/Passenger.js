import React from 'react';

const Passenger = ({ id, title, firstName, surname, passportId }) => {

    return (
        <tr>
            <td>{title}</td>
            <td>{firstName}</td>
            <td>{surname}</td>
            <td>{passportId}</td>
            <td><button id={`p ${id}`} className="deleteButton">Delete</button></td>
            <td className="lastCol"></td>
        </tr>
    )
}

export default Passenger;