import React from 'react';
import './BasicInfo.css';

const BasicInfo = () => {

    return (
        <div id="basicInfo">
                <p>Basic Info</p>
            <div className="div-under-basicInfo">
                <label htmlFor="basicInfoEmailField">Email</label>
                <input type="email" name="basicInfoEmailField" id="basicInfoEmailField"/>
                <label htmlFor="nameField">Name</label>
                <input type="text" name="nameField" id="nameField"/>
                <label htmlFor="addressField">Address</label>
                <input type="text" name="addressField" id="addressField"/>
                <label htmlFor="cityField">City</label>
                <input type="text" name="cityField" id="cityField"/>
                <label htmlFor="countryField">Country</label>
                <input type="text" name="countryField" id="countryField"/>
                <input type="submit" value="Save" className="saveButton"/>
            </div>
        </div>
    )
}

export default BasicInfo;