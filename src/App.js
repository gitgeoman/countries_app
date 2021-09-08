import React from 'react';

import {countries} from './data/EuropeCountries.js';
import CountryCardList from './CountryCardList';
import LeafletMap from './LeafletMap';


import './App.css';


function App() {
  //console.log(countries.features);
  return (

    <div>
        <CountryCardList obiekty={countries}/>
         <LeafletMap obiekty={countries}/>
    </div>
   )
  }


export default App;
