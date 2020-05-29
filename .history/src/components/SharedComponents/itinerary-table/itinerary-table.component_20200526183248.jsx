import React from 'react';
import {Itinerary, Title, Content} from './itinerary-table.styles'

const ItineraryTable = ({title, itineraryTables}) =>
     (
      <Content>
        {title ? <Title>{title}</Title> : null}
        { itineraryTables.map(itinerary => (
          <Itinerary>
            <label>{itinerary.day}</label>
            <label>{itinerary.city}</label>
            <p>{itinerary.description}</p>
          </Itinerary>
        )) }
      </COntent>
    );

export default ItineraryTable;
