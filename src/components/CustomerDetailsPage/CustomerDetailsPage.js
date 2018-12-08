import React from 'react';
import './CustomerDetailsPage.css';
import Header from '../Header/Header';
import BasicInfo from '../BasicInfo/BasicInfo';
import Passengers from '../Passengers/Passengers';
import Trips from '../Trips/Trips';

const CustomerDetailsPage = () => {

    return (
        <div id="customerDetailsPage">
            <Header />
            <BasicInfo />
            <Passengers />
            <Trips />
        </div>
    )
}

export default CustomerDetailsPage;