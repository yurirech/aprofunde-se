import React from 'react';

const ItineraryTable = ({title, itineraryTables}) =>
     (
      <div className="itinerary-table">
        {title ? <h1>{title}</h1> : null}
        { itineraryTables.map(table =>{

        }) }
      </div>
    );

export default ItineraryTable;
