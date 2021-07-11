import React from 'react';
import './Country.css'

// Reciving mapping elements through props parameter
const Country = (props) => {
    const {name, population, flag, region} = props.country;
    const addCountries = props.addCountries;
    return(
        <div className="country">
            <img src={flag} alt="Flag" />
            <h3>Country Name: {name}</h3>
            <h4>Country Population: {population}</h4>
            <h4>Region: {region}</h4>
            {/* inside e.handler we are passing countries those are 
            clicked through parameter */}
            <button onClick={() => addCountries(props.country)}>Add Countries</button>
        </div>
    )
}

export default Country;