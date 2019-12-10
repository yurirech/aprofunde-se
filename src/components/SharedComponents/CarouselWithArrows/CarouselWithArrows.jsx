import React, {Component} from 'react';
import {Content} from "./CarouselWithArrowsStyled";
import {Carousel} from "react-bootstrap";
import {dayTours} from "../../Home/HomeContent";

class CarouselWithArrows extends Component {
  render() {

    let carouselItem = dayTours.carousel.map((content, i) =>
      <Carousel.Item>
        <div style={{ color: 'var(--aprofunde-se-orange)' }} className='flex align-items-center'>
          <h5>{content.carouselTitle}</h5>
          <img
            style={{ marginLeft: 'auto'}}
            className="carousel-img"
            src={content.carouselImage}
            alt=""
          />
        </div>
      </Carousel.Item>

    );
    return (
      <Content>
        <Carousel>
          {carouselItem}
        </Carousel>
      </Content>
    );
  }
}

export default CarouselWithArrows;
