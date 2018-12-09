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
            <AddTrip passengersList={app.state.passengers}/>
            <AddPassenger />
            <BasicInfo app={app.state.customer} />
            <PassengersList passengersList={app.state.passengers} />
            <TripsList tripsList={app.state.trips} />
        </div>
    )
}

export default CustomerDetailsPage;