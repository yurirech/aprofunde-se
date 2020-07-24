import React from 'react';
import {Carousel} from "react-bootstrap";
import { ImageWrapper } from '../../tours-details/tours-details.styles';
import { Image } from '../../../_styles';
import {v4 as uuid} from 'uuid';

const SliderNoArrows = ({carouselImages}) =>  (
        <Carousel controls={false} interval={3000}>
          {
            carouselImages.map(image =>
              <Carousel.Item key={uuid()}>
                <ImageWrapper dayTourStyles>
                  <Image
                    bg={image}
                  />
                </ImageWrapper>
              </Carousel.Item>
            )
          }
        </Carousel>
    );

export default SliderNoArrows;
