import React from 'react';
import './TripsList.css';
import Trip from '../Trip/Trip';

const TripsList = ({ tripsList, onAddTripClick }) => {
    const tripsArray = tripsList.map(trip =>{
        return <Trip key={trip.trip_id} id={trip.trip_id} departureAirport={trip.departure_airport}
                            destinationAirport={trip.destination_airport} departureTime={trip.departure_time}
                            arrivalTime={trip.arrival_time} passengers={trip.passengers}/>
    })

    return (
        <div id="trips">
            <p>Trips</p>
            <table id="table-trips">
                <tbody className="tripsTBody">
                <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Passengers</th>
                    <td>Options</td>
                </tr>
                { tripsArray }
                </tbody>
            </table>
            <button onClick={onAddTripClick} className="addButton">Add</button>
        </div>
    )
}

export default TripsList;