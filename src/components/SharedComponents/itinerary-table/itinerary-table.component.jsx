import React from 'react';
import {Itinerary, Title, Content} from './itinerary-table.styles'

const ItineraryTable = ({itineraryTables}) =>
     (
      <Content>
        { itineraryTables.map(itinerary => (
          <Itinerary>
            <label>{itinerary.day}</label>
            <label>{itinerary.city}</label>
            <p>{itinerary.description}</p>
          </Itinerary>
        )) }
      </Content>
    );

export default ItineraryTable;
