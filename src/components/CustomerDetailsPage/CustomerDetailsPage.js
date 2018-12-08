import React from 'react';
import './CustomerDetailsPage.css';
import BasicInfo from '../BasicInfo/BasicInfo';
import PassengersList from '../PassengersList/PassengersList';
import TripsList from '../TripsList/TripsList';

const CustomerDetailsPage = ({ app }) => {

    return (
        <div id="customerDetailsPage">
            <BasicInfo app={app.state.customer} />
            <PassengersList passengersList={app.state.passengers} />
            <TripsList tripsList={app.state.trips} />
        </div>
    )
}

export default CustomerDetailsPage;