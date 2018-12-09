import React from 'react';

const PassengerCheckBox = ({title, firstName, surname, onPassengerCheck}) => {
    const fullName = `${title}-${firstName}-${surname}`;

    return(
        <div>
            <input onChange={onPassengerCheck} type="checkbox" id={fullName} name={fullName}
             value={`${title} ${firstName} ${surname}`} />{`${title} ${firstName} ${surname}`}<br/>
        </div>
    )
}

export default PassengerCheckBox;