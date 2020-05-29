import React from 'react';
import {Itinerary, Title} from './itinerary-table.styles'

const ItineraryTable = ({title, itineraryTables}) =>
     (
      <div className="itinerary-table">
        {title ? <Title>{title}</Title> : null}
        { itineraryTables.map(itinerary => (
          <Itinerary>
            <label>{itinerary.day}</label>
            <label>{itinerary.city}</label>
            <p>{itinerary.description}</p>
          </Itinerary>
        )) }
      </div>
    );

export default ItineraryTable;
