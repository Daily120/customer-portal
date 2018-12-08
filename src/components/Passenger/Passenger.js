import React from 'react';

const deletePassengerFromUI = (passengerRow) => {
    console.log(passengerRow);
    passengerRow.parentNode.parentNode.parentNode.removeChild(passengerRow.parentNode.parentNode);
}

const displayError = () => {
    alert('Error deleting passenger!')
}

const handleDeletePassenger = (event) => {
    const passenger = event.target;
    const passengerId = passenger.id.split(' ')[1];
    
    fetch('http://localhost:3001/passengers', {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${localStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: passengerId
        })
    }).then(res => res.json())
    .then(data => data === 'Success' ? deletePassengerFromUI(passenger) : displayError())
}

const Passenger = ({ id, title, firstName, surname, passportId }) => {

    return (
        <tr>
            <td>{title}</td>
            <td>{firstName}</td>
            <td>{surname}</td>
            <td>{passportId}</td>
            <td><button onClick={handleDeletePassenger} id={`p ${id}`} className="deleteButton">Delete</button></td>
            <td className="lastCol"></td>
        </tr>
    )
}

export default Passenger;