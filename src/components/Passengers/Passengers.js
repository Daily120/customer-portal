import React from 'react';
import './Passengers.css';

const Passengers = () => {

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
                <tr>
                    <td>Mr</td>
                    <td>John</td>
                    <td>Smith</td>
                    <td>123456</td>
                    <td><button className="deleteButton">Delete</button></td>
                    <td className="lastCol"></td>
                </tr>
                <tr>
                    <td>Miss</td>
                    <td>Maria</td>
                    <td>Ritney</td>
                    <td>37982345</td>
                    <td><button className="deleteButton">Delete</button></td>
                    <td className="lastCol"></td>
                </tr>
                <tr>
                    <td>Mr</td>
                    <td>Paul</td>
                    <td>Southwood</td>
                    <td>893981234</td>
                    <td><button className="deleteButton">Delete</button></td>
                    <td className="lastCol"></td>
                </tr>
                </tbody>
            </table>
            <button className="addButton">Add</button>
        </div>
    )
}

export default Passengers;