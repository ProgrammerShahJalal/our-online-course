import React from 'react';
import DisplayService from './DisplayService/DisplayService';


const DisplayServices = (props) => {
    const { service } = props
    return (
        <div>
            <DisplayService service={service}></DisplayService>
        </div>

    );
};

export default DisplayServices;