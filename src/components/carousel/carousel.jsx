import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselContainer = () => {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "https://raw.githubusercontent.com/owaisibrahim099/react-carousel/master/src/assets/images/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={null}>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/owaisibrahim099/react-carousel/master/src/assets/images/2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={null}>
        <img
          className="d-block w-100"
          src="https://raw.githubusercontent.com/owaisibrahim099/react-carousel/master/src/assets/images/3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;