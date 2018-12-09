import React from 'react';

const PassengerCheckBox = ({title, firstName, surname}) => {
    const fullName = `${title}-${firstName}-${surname}`;

    return(
        <div>
            <input type="checkbox" id={fullName} name={fullName}
             value={`${title} ${firstName} ${surname}`} />{`${title} ${firstName} ${surname}`}<br/>
        </div>
    )
}

export default PassengerCheckBox;