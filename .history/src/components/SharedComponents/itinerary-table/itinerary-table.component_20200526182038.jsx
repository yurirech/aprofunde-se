import React from 'react';
import {Itin}

const ItineraryTable = ({title, itineraryTables}) =>
     (
      <div className="itinerary-table">
        {title ? <h1>{title}</h1> : null}
        { itineraryTables.map(itinerary => (
          <div class='table'>
            <label>{itinerary.day}</label>
            <label>{itinerary.city}</label>
            <p>{itinerary.description}</p>
          </div>
        )) }
      </div>
    );

export default ItineraryTable;
