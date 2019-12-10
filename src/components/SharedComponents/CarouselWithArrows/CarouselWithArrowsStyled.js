import styled from "styled-components";
import rightArrow from '../../../assets/img/arrow-right.png'
import leftArrow from '../../../assets/img/arrow-left.png'

export const Content = styled.div`

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
`;
