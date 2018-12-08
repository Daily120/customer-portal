import React from 'react';
import './AddPassenger.css';

const AddPassenger = () => {

    return (
        <div id="addPassenger">
            <p className="add-Passenger-P">Add passenger</p>
            <div className="div-under-addPassenger">
                <p>Title</p>
                <select name="titleSelect" id="titleSelect">
                    <option value="Mr">Mr</option>
                    <option value="Mrss">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Ms">Ms</option>
                </select>
                <p>Firstname</p>
                <input type="text" name="firstNameField" id="firstNameField"/>
                <p>Surname</p>
                <input type="text" name="surnameField" id="surnameField"/>
                <p>Passportid</p>
                <input type="text" name="passportID" id="passportID"/>
                <button className="addPassengerButton">Add</button>
            </div>
            <button className="cancelButton">Cancel</button>
        </div>
    )
}

export default AddPassenger;