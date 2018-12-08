import React from 'react';
import './Trips.css';

const Trips = () => {

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
                <tr>
                    <td>MAD</td>
                    <td>LAX</td>
                    <td>11/Apr/2017/ 06:31</td>
                    <td>11/May/2017/ 17:33</td>
                    <td>Mr John Smith ,Mr Paul Southwood</td>
                    <td><button className="deleteButton">Delete</button></td>
                </tr>
                <tr>
                    <td>LON</td>
                    <td>LGW</td>
                    <td>12/Apr/2017/ 10:36</td>
                    <td>23/June/2017 09:39</td>
                    <td>Mr John Smith ,Miss Maria Ritney</td>
                    <td><button className="deleteButton">Delete</button></td>
                </tr>
                </tbody>
            </table>
            <button className="addButton">Add</button>
        </div>
    )
}

export default Trips;