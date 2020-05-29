import React from 'react';

import './package-details.styles';

import { FlexContainer } from '../../_styles';

const PackageDetails = () => (
  <FlexContainer>
    <div>
      <img src="http://www.pacificworld.com/webwp/wp-content/uploads/2016/10/06netherlands.jpg" alt=""/>
    </div>
    <FlexContainer justify='center' column>
      <h2>Embrenhe-se</h2>
      <small>6 dias 5 noite</small>
      <p>A Holanda é um pais muito pequeno, o que significa que pra ir de uma cidade grande pra 
      outra leva-se 30 minutos ou menos. Ou seja, mesmo que você decida passar pouco tempo na Holanda, 
      com o Aprofunde-se é possível visitar as principais cidades do país: Amsterdam, Giethoorn, Otterlo, 
      Amersfoort, Utrecht, Rotterdam, Den Haag e Haarlem.</p>
    </FlexContainer>
  </FlexContainer>
);

export default PackageDetails;