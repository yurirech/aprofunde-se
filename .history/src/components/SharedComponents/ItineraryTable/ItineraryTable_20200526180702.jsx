import React from 'react';

const ItineraryTable = ({title, itineraryTables}) =>
     (
      <div className="itinerary-table">
        {title ? <h1>{title}</h1> : null}
        { itineraryTables.map(table => (
          <div class='table'>
            <label></label>
          </div>
        )) }
      </div>
    );

export default ItineraryTable;
