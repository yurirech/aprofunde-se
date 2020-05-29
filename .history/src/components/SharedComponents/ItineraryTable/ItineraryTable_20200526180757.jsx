import React from 'react';

const ItineraryTable = ({title, itineraryTables}) =>
     (
      <div className="itinerary-table">
        {title ? <h1>{title}</h1> : null}
        { itineraryTables.map(itinerary => (
          <div class='table'>
            <label>{itinerary.day}</label>
            <label></label>
          </div>
        )) }
      </div>
    );

export default ItineraryTable;
