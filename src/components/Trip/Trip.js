import React from 'react';

const Trip = ({ id, departureAirport, destinationAirport, departureTime, arrivalTime, passengers }) => {

    passengers = passengers.join(', ');
    const deleteTripFromUI = (tripRow) => {
        tripRow.parentNode.parentNode.parentNode.removeChild(tripRow.parentNode.parentNode);
    }
    
    const displayError = () => {
        alert('Error deleting trip!')
    }
    
    const handleDeleteTrip = (event) => {
        const trip = event.target;
        const tripID = trip.id.split(' ')[1]; 

        fetch('https://customerportalgb.herokuapp.com/trips', {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                trip_id: tripID
            })
        }).then(res => res.json())
        .then(data => data === 'Success' ? deleteTripFromUI(trip) : displayError())
    }

    return (
        <tr>
            <td>{departureAirport}</td>
            <td>{destinationAirport}</td>
            <td>{departureTime}</td>
            <td>{arrivalTime}</td>
            <td>{passengers}</td>
            <td><button onClick={handleDeleteTrip} id={`t ${id}`} className="deleteButton">Delete</button></td>
        </tr>
    )
}

export default Trip;