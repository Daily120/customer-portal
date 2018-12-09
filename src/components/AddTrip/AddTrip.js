import React, {Component} from 'react';
import './AddTrip.css';
import PassengerCheckBox from '../PassengerCheckBox/PassengerCheckBox';

class AddTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        console.log(props);
        this.passengersCheckBoxArray = props.passengersList.map(passenger =>{
            return <PassengerCheckBox key={passenger.passengerid} title={passenger.title}
            firstName={passenger.firstname} surname={passenger.surname} />
        })
    }

    render() {
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
                    {this.passengersCheckBoxArray}
                    <button className="saveButtonTrip">Save</button>
                </div>
                <button className="cancelTripButton">Cancel</button>
            </div>
        )
    }
}
        
export default AddTrip;