import React from 'react';
import './CustomerDetailsPage.css';
import BasicInfo from '../BasicInfo/BasicInfo';
import PassengersList from '../PassengersList/PassengersList';
import TripsList from '../TripsList/TripsList';
import AddTrip from '../AddTrip/AddTrip';
import AddPassenger from '../AddPassenger/AddPassenger';

const CustomerDetailsPage = ({ app }) => {

    return (
        <div id="customerDetailsPage">
            <BasicInfo app={app.state.customer} />
            <PassengersList passengersList={app.state.passengers}
                            onAddPassengerClick={app.onAddPassengerClick}/>
            { app.state.addPassengerWindow ? <AddPassenger onCancelAddPassengerClick={app.onCancelAddPassengerClick}/> : null }
            <TripsList tripsList={app.state.trips}
                       onAddTripClick={app.onAddTripClick}/>
            { app.state.addTripWindow ? <AddTrip passengersList={app.state.passengers} onCancelAddTripClick={app.onCancelAddTripClick}/> : null}
        </div>
    )
}

export default CustomerDetailsPage;