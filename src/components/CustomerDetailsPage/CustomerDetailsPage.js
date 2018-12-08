import React from 'react';
import './CustomerDetailsPage.css';
import BasicInfo from '../BasicInfo/BasicInfo';
import Passengers from '../Passengers/Passengers';
import Trips from '../Trips/Trips';

const CustomerDetailsPage = ({ app }) => {

    return (
        <div id="customerDetailsPage">
            <BasicInfo app={app.state.customer}/>
            <Passengers />
            <Trips />
        </div>
    )
}

export default CustomerDetailsPage;