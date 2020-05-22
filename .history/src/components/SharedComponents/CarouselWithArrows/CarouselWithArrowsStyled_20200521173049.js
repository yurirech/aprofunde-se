import styled from "styled-components";
import rightArrow from '../../../assets/img/arrow-right.png'
import leftArrow from '../../../assets/img/arrow-left.png'
import {colors, device} from '../../../_variables'

export const Content = styled.div`
  padding: 0 9%;

.header {
  text-align: left;
  
  small {
    color: ${colors.aprofundeSeBlackText};
  }
}

  .carousel-control-prev {
    left: -12rem;
}

.carousel-control-next {
  right: -12rem;
}

.carousel-indicators {
  bottom: -3rem;
  
  li {
    background-color: black;
  }
}

.carousel-img {
  width: 40%;
  margin-left: auto;
}

.carousel-control-next-icon {
  background-image: url('${rightArrow}');
  width: 30%;
  height: 15%;
}

.carousel-control-prev-icon {
  background-image: url('${leftArrow}');
  width: 30%;
  height: 15%;
}

@media ${device.tablet} {
  padding: unset;

  .header {
    small {
      position: absolute;
      top: 3.5rem;
      right: 4px;
    }
  }
}

   h5 {
    font-size: 2.25rem;
    line-height: 2.2;
   }
  
  .flex {
  flex-direction: column;
  }
  
  .carousel-img {
    border-radius: 50%;
    width: 80%;
    margin-left: unset;
    margin-bottom: 1rem;
  }
  
  .carousel-control-next {
  display: none;
}

.carousel-control-prev {
  display: none;
}
}
  
`;
