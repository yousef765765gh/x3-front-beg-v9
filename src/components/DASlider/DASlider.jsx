
import { useState, useEffect, useRef  } from "react";

import "./DASlider.css";
import CardsData from "../../data/TestimonialsCards.json";
import SliderCardHome from "../Slidercardhome/SliderCardHome";

const DASlider = () => {
  
  const [offset, setOffset] = useState(0);
  const [isGrid, setIsGrid] = useState(window.innerWidth > 1440);
  const [itemsPerSlide, setItemsPerSlide] = useState(
    window.innerWidth <= 992 ? 1 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width > 1440) {
        setIsGrid(true);
        setOffset(0);
      } else {
        setIsGrid(false);
        setItemsPerSlide(width <= 992 ? 1 : 2);
        setOffset(0);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const maxcard = CardsData.length-1
  const maxOffset = CardsData.length - itemsPerSlide;

  const slideRight = () => {
    setOffset((prev) => (prev === 0 ? maxOffset : prev - 1));
  };

  const slideLeft = () => {
    setOffset((prev) => (prev === maxOffset ? 0 : prev + 1));
  };
  const goToSlide = (index) => setOffset(index);

  return (
    <div className={`DA_CardsContainer ${isGrid ? "grid" : ""}`}>
      <div className="DA_Slider">

        {!isGrid && (
          <button className="Button-left" onClick={slideRight}>
            &#10094;
          </button>
        )}

        <div
          className="DA_Slide"
          style={{
            transform: !isGrid
              ? `translateX(-${offset * (100 / itemsPerSlide)}%)`: "none",
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {CardsData.map((card, index) => (
            <div
              key={index}
              style={{
                flex: !isGrid? `0 0 ${100 / itemsPerSlide}%` : "0 0 auto",
              }}
            >
              <SliderCardHome card={card} />
            </div>
          ))}
        </div>

        {!isGrid && (
          <button className="Button-right" onClick={slideLeft}>
            &#10095;
          </button>
        )}
      </div>

        { !isGrid && (
          <div className="Dots">
            {Array.from({ length: maxcard }).map((_, index) => (
            <span
              key={index}
              className={`Dot ${index === offset ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
            ))}
          </div>
      )}
    </div>
  );
};

export default DASlider;
