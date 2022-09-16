import React from 'react'
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <Carousel className="mb-3">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1652107788664-02b06074ac28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
      />
    </Carousel.Item>
  </Carousel>

  )
}

export default Slider

