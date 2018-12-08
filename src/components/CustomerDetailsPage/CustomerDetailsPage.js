import React from 'react';
import './CustomerDetailsPage.css';
import BasicInfo from '../BasicInfo/BasicInfo';
import PassengersList from '../PassengersList/PassengersList';
import Trips from '../Trips/Trips';

const CustomerDetailsPage = ({ app }) => {

    return (
        <div id="customerDetailsPage">
            <BasicInfo app={app.state.customer}/>
            <PassengersList passengersList={app.state.passengers}/>
            <Trips />
        </div>
    )
}

export default CustomerDetailsPage;