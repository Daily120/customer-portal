import React from 'react';
import './AddTrip.css';

const AddTrip = () => {

    return (
        <div id="addTrip">
            <p className="add-trip-P">Add trip</p>
            <div className="div-under-addTrip">
                <p>Departure airport</p>
                <input type="text" name="departureAirport" id="departureAirport" />
                <p>Destination airport</p>
                <input type="text" name="destinationAirport" id="destinationAirport" />
                <p>Departure date</p>
                <input type="datetime-local" name="departureDate" id="departureDate" />
                <p>Arrival date</p>
                <input type="datetime-local" name="arrivalDate" id="arrivalDate" />
            </div>
            <div className="grid-with-checkbox">
                <p className="grid-with-checkbox-P">Passengers</p>
                <input type="checkbox" id="mr-john-smith" name="mr-john-smith" />
                <label htmlFor="mr-john-smith">Mr John Smith</label>
                <input type="checkbox" id="miss-maria-ritney" name="miss-maria-ritney" />
                <label htmlFor="miss-maria-ritney" className="missMaria">Miss Maria Ritney</label>
                <input type="checkbox" id="mr-paul-southwood" name="mr-paul-southwood" />
                <label htmlFor="mr-paul-southwood" className="mrPaul">Mr Paul Southwood</label>
                <button className="saveButtonTrip">Save</button>
            </div>
                <button className="cancelTripButton">Cancel</button>
            </div>
            )
        }
        
export default AddTrip;