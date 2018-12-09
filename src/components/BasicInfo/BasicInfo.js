import React, {Component} from 'react';
import './BasicInfo.css';

const handleSaveCustomer = () => {
    const email = document.getElementById('basicInfoEmailField').value;
    const name = document.getElementById('nameField').value;
    const address = document.getElementById('addressField').value;
    const city = document.getElementById('cityField').value;
    const country = document.getElementById('countryField').value;

    fetch('https://customerportalgb.herokuapp.com/customers', {
        method: 'PUT',
        headers: {
            authorization: `Bearer ${localStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            name,
            address,
            city,
            country
        })
    }).then(res => res.json())
    .then(data=> {
        if(data.name) {
            window.location.reload();
        } else {
            alert('Ooops! Something went wrong. Try again!');
        }
    })
}

class BasicInfo extends Component {
    constructor(props) {
        super(props);
        const customer = props.app;
        this.state = {
            email: customer.email,
            name: customer.name,
            address: customer.address,
            city: customer.city,
            country: customer.country
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onAddressChange = (event) => {
        this.setState({address: event.target.value})
    }

    onCityChange = (event) => {
        this.setState({city: event.target.value})
    }

    onCountryChange = (event) => {
        this.setState({country: event.target.value})
    }
    
    render() {
        const { email, name, address, city, country} = this.state;
        return (
            <div id="basicInfo" className="white-bg">
                    <p>Basic Info</p>
                <div className="div-under-basicInfo">
                    <label htmlFor="basicInfoEmailField">Email</label>
                    <input onChange={this.onEmailChange} type="email" name="basicInfoEmailField" id="basicInfoEmailField" value={email}/>
                    <label htmlFor="nameField">Name</label>
                    <input onChange={this.onNameChange} type="text" name="nameField" id="nameField" value={name}/>
                    <label htmlFor="addressField">Address</label>
                    <input onChange={this.onAddressChange} type="text" name="addressField" id="addressField" value={address}/>
                    <label htmlFor="cityField">City</label>
                    <input onChange={this.onCityChange} type="text" name="cityField" id="cityField" value={city}/>
                    <label htmlFor="countryField">Country</label>
                    <input onChange={this.onCountryChange} type="text" name="countryField" id="countryField" value={country}/>
                    <input onClick={handleSaveCustomer} type="submit" value="Save" className="saveButton"/>
                </div>
            </div>
        )
    }
}

export default BasicInfo;