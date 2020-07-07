import React from 'react';
import {Carousel} from "react-bootstrap";
import {carouselImages} from "../../../pages/about/about.data";
import { ImageWrapper } from '../../tours-details/tours-details.styles';
import { Image } from '../../../_styles';

const SliderNoArrows = () =>  (
        <Carousel controls={false} interval={3000}>
          {
            carouselImages.map((content, i) =>
              <Carousel.Item key={i}>
                <ImageWrapper dayTourStyles>
                  <Image
                    bg={content.img}
                  />
                </ImageWrapper>
              </Carousel.Item>)
          }
        </Carousel>
    );

export default SliderNoArrows;
