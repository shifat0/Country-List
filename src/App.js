import React, { useEffect, useState } from 'react';
import './App.css';
import Country from './Components/Country/Country'

function App() {
  // States
  const [countries, setCountries] = useState([]); // All 250 countries array
  const [addedCountries, setAddedCountries] = useState([]) // Which countries we are adding from button

  // Converting Api to JSON
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => setCountries(data))
  } ,[])
  
  // Add-Countries button event handler
  let newAddCountries = 0;
  const addCountries = (country) => {
    newAddCountries = [...addedCountries, country];
    setAddedCountries(newAddCountries);
  }

  // Added Population
  const totalPopulation = addedCountries.reduce( 
    (totalPopulation, country) => 
    totalPopulation + country.population 
    , 0)

  return (
    <div className="App">
      <h1>Total Countries: {countries.length}</h1>
      <h3 className="title">Added Countries: {addedCountries.length}</h3>
      <h3 className="title">Added Population: {totalPopulation}</h3>
      {
        // Mapping countries and transfering to Country.js
        countries.map(country => <Country 
          country = {country}
          addCountries = {addCountries}
          key = {country.alpha3Code}
        />)
      }
    </div>
  );
}

export default App;
