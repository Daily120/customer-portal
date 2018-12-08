import React, {Component} from 'react';
import './AddPassenger.css';

class AddPassenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Mr'
        }
    }

    onTitleChange = (event) => {
        this.setState({title: event.target.value});
    }

    onFirstNameChange = (event) => {
        this.setState({firstname: event.target.value});
    }

    onSurnameChange = (event) => {
        this.setState({surname: event.target.value});
    }

    onPassportIdChange = (event) => {
        this.setState({passportid: event.target.value});
    }

    handleAddPassenger = () => {
        const { title, firstname, surname, passportid } = this.state;
        fetch('http://localhost:3001/passengers', {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                firstname,
                surname,
                passportid
            })
        }).then(res => res.json())
        .then(newPassenger => {
            if(newPassenger[0].title) {
                window.location.reload()
            } else {
                alert('Unable to add the passenger! Check the data and try again!')
            }
        })
    }

    render() {
        return (
            <div id="addPassenger">
                <p className="add-Passenger-P">Add passenger</p>
                <div className="div-under-addPassenger">
                    <p>Title</p>
                    <select onChange={this.onTitleChange} name="titleSelect" id="titleSelect">
                        <option value="Mr">Mr</option>
                        <option value="Mrss">Mrs</option>
                        <option value="Miss">Miss</option>
                        <option value="Ms">Ms</option>
                    </select>
                    <p>Firstname</p>
                    <input onChange={this.onFirstNameChange} type="text" name="firstNameField" id="firstNameField"/>
                    <p>Surname</p>
                    <input onChange={this.onSurnameChange} type="text" name="surnameField" id="surnameField"/>
                    <p>Passportid</p>
                    <input onChange={this.onPassportIdChange} type="text" name="passportID" id="passportID"/>
                    <button onClick={this.handleAddPassenger} className="addPassengerButton">Add</button>
                </div>
                <button className="cancelButton">Cancel</button>
            </div>
        )
    }
}

export default AddPassenger;