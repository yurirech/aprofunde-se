import React from 'react';
import {Itinerary} from './itinerary-table.styles'

const ItineraryTable = ({title, itineraryTables}) =>
     (
      <div className="itinerary-table">
        {title ? <h1>{title}</h1> : null}
        { itineraryTables.map(itinerary => 
            <label>{itinerary.day}</label>
            <label>{itinerary.city}</label>
            <p>{itinerary.description}</p>
        )) }
      </div>
    );

export default ItineraryTable;
