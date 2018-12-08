import React from 'react';
import './PassengersList.css';
import Passenger from '../Passenger/Passenger';

const PassengersList = ({ passengersList }) => {
    const passengersArray = passengersList.map(passenger =>{
        return <Passenger key={passenger.passengerid} id={passenger.passengerid} title={passenger.title}
                            firstName={passenger.firstname} surname={passenger.surname} passportId={passenger.passportid}/>
    })

    return (
        <div id="passengers">
            <p>Passengers</p>
            <table id="table-passengers">
                <tbody className="passengersTBody">
                <tr>
                    <th>Title</th>
                    <th>First Name</th>
                    <th>Surname</th>
                    <th>Pastport ID</th>
                    <th>Options</th>
                    <td className="lastCol"></td>
                </tr>
                    {passengersArray}
                </tbody>
            </table>
            <button className="addButton">Add</button>
        </div>
    )
}

export default PassengersList;