import React from 'react';
import './CustomerDetailsPage.css';
import BasicInfo from '../BasicInfo/BasicInfo';
import Passengers from '../Passengers/Passengers';
import Trips from '../Trips/Trips';

const CustomerDetailsPage = () => {

    return (
        <div id="customerDetailsPage">
            <BasicInfo />
            <Passengers />
            <Trips />
        </div>
    )
}

export default CustomerDetailsPage;