import React, {Component} from 'react';
import './AddTrip.css';
import PassengerCheckBox from '../PassengerCheckBox/PassengerCheckBox';

class AddTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passengersList: []
        }
        this.passengersCheckBoxArray = props.passengersList.map(passenger =>{
            return <PassengerCheckBox key={passenger.passengerid} title={passenger.title}
            firstName={passenger.firstname} surname={passenger.surname} onPassengerCheck={this.onPassengerCheck}/>
        })
    }

    onPassengerCheck = (event) => {
        let passengersList = this.state.passengersList;
        if(event.target.checked) {
            passengersList.push(event.target.value)
        } else {
            passengersList.splice(passengersList.indexOf(event.target.value), 1)
        }

        this.setState({
            passengersList
        })
    }

    onDepartureAirportChange = (event) => {
        this.setState({
            departure_airport: event.target.value
        })
    }

    onDestinationAirportChange = (event) => {
        this.setState({
            destination_airport: event.target.value
        })
    }

    onDepartureDateChange = (event) => {
        this.setState({
            departureDate: event.target.value
        })
    }

    onDepartureTimeChange = (event) => {
        this.setState({
            departureTime: event.target.value
        })
    }

    onArrivalDateChange = (event) => {
        this.setState({
            arrivalDate: event.target.value
        })
    }

    onArrivalTimeChange = (event) => {
        this.setState({
            arrivalTime: event.target.value
        })
    }

    handleAddTrip = () => {
        const { departure_airport, destination_airport, departureDate, departureTime, arrivalDate, arrivalTime, passengersList } = this.state;
        const departure_time = `${departureDate} ${departureTime}`;
        const arrival_time = `${arrivalDate} ${arrivalTime}`;
        fetch('http://localhost:3001/trips', {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                departure_airport,
                destination_airport,
                departure_time,
                arrival_time,
                passengers: passengersList
            })
        }).then(res => res.json())
        .then(newTrip => {
            if(newTrip[0].passengers) {
                window.location.reload()
            } else {
                alert('Unable to add the trip! Try again!')
            }
        })
    }

    render() {
        return (
            <div id="addTrip">
                <p className="add-trip-P">Add trip</p>
                <div className="div-under-addTrip">
                    <label htmlFor="departureAirport">Departure airport</label>
                    <input onChange={this.onDepartureAirportChange} type="text" name="departureAirport" id="departureAirport" />
                    <label htmlFor="destinationAirport">Destination airport</label>
                    <input onChange={this.onDestinationAirportChange} type="text" name="destinationAirport" id="destinationAirport" />
                    <label htmlFor="departureDate">Departure date</label>
                    <input onChange={this.onDepartureDateChange} type="date" name="departureDate" id="departureDate" />
                    <label htmlFor="departureTime">Departure time</label>
                    <input onChange={this.onDepartureTimeChange} type="time" name="departureTime" id="departureTime" />
                    <label htmlFor="arrivalDate">Arrival date</label>
                    <input onChange={this.onArrivalDateChange} type="date" name="arrivalDate" id="arrivalDate" />
                    <label htmlFor="arrivalTime">Arrival time</label>
                    <input onChange={this.onArrivalTimeChange} type="time" name="arrivalTime" id="arrivalTime" />
                </div>
                <div className="passengers">
                    <label htmlFor="passengersCheckBoxList">Passengers: </label>
                    <div id="passengersCheckBoxList">
                        {this.passengersCheckBoxArray}
                        <button onClick={this.handleAddTrip} className="saveButtonTrip">Save</button>
                    </div>
                </div>
                <button onClick={this.props.onCancelAddTripClick} className="cancelTripButton">Cancel</button>
            </div>
        )
    }
}
        
export default AddTrip;