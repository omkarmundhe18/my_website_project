import React from "react";

import image01 from "../assets/image01.jpeg";
import image02 from "../assets/image02.jpeg";
import image03 from "../assets/image03.jpeg";
import image04 from "../assets/image04.jpeg";

const HomeSlider = () => {
  const slides = [image01, image02, image03, image04];

  return (
    <div
      id="hotelSlider"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      {/* Slider Indicators */}
      <div className="carousel-indicators">
        {slides.map((image, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#hotelSlider"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></button>
        ))}
      </div>

      {/* Slider Images */}
      <div className="carousel-inner">
        {slides.map((image, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img
              src={image}
              className="d-block w-100"
              alt={`Hotel Slide ${index + 1}`}
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#hotelSlider"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#hotelSlider"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default HomeSlider;