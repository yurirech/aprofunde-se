import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import CentralizedSection from "../../components/SharedComponents/centrilized-section/centrilized-section.component";
import ListWithIcons from "../../components/SharedComponents/list-with-icons/list-with-icons.component";
import Package from '../../components/package/package'
import CustomCardWithBackground from '../../components/custom-card-with-background/custom-card-with-background.component';




class Packages extends Component {
  
  render() {
    const {location} = this.props;
    
    // Mapping through list of icons
    let whatIsIncluded = homeTours.whatIsIncluded.map((content) =>
      <ListWithIcons key={uuid()} listItem={content.content} icon={content.icon} />
    );

    // Mapping through custom Card with background
    let packagesCards = packageCard.map(({...otherProps}) => (
      <CustomCardWithBackground {...otherProps} 
                                buttonBackgroungColor='#000' 
                                key={uuid()}  />
    ));

    if(location.pathname === '/packages') {
      return (
        <Content>
          <div className='title'>
            <CentralizedSection title={'Pacotes'} mainText={homeTours.mainText}/>
          </div>
         <div className='list'>
          <p>{homeTours.subTitle}</p>
           { whatIsIncluded }
           <p>-Passagem aérea não inclusa</p>
         </div> 
         <FlexContainer margin='0' justify='center' alignMd='center' columnMd>
            { packagesCards }
          </FlexContainer>
        </Content>
      );
    } else if(location.pathname === '/packages/embrenhe-se') {
      return <Package packageDetails={packageDetails.embrenhaSe} 
                      ourServices={ourSevices.embrenhaSe} 
                      itineraryTables={itineraryTables.embrenhaSe} />
    
    } else if (location.pathname === '/packages/entranhe-se') {
      return <Package packageDetails={packageDetails.entranheSe} 
                      ourServices={ourSevices.entranheSe} 
                      itineraryTables={itineraryTables.entranheSe} />
    
    } else {
      return <Package packageDetails={packageDetails.entregueSe} 
                      ourServices={ourSevices.entregueSe} 
                      itineraryTables={itineraryTables.entregueSe} />
    
    }
  }
}

export default withRouter(Packages);
