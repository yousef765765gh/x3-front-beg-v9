import { useState, useEffect } from "react";
import "./DASlider.css";
import CardsData from "../../data/TestimonialsCards.json";
import SliderCardHome from "../Slidercardhome/SliderCardHome";

const DASlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(() => {
    if (window.innerWidth > 1440) return CardsData.length;
    if (window.innerWidth <= 992) return 1;
    return 2;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1440) setItemsPerSlide(CardsData.length);
      else if (window.innerWidth <= 992) setItemsPerSlide(1);
      else setItemsPerSlide(2);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(CardsData.length / itemsPerSlide);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index) => setCurrentIndex(index);

  const startIndex = currentIndex * itemsPerSlide;
  let slideItems = CardsData.slice(startIndex, startIndex + itemsPerSlide);
  if (slideItems.length < itemsPerSlide) {
    slideItems = [...slideItems, ...CardsData.slice(0, itemsPerSlide - slideItems.length)];
  }

  return (
    <div className={`DA_CardsContainer ${itemsPerSlide === CardsData.length ? "grid" : ""}`}>
      <div className="DA_Slider">
        {itemsPerSlide !== CardsData.length && (
          <button className="Button-left" onClick={prevSlide}>&#10094;</button>
        )}

        <div className="DA_Slide">
          {slideItems.map((card, index) => (
            <SliderCardHome key={index} card={card} />
          ))}
        </div>

        {itemsPerSlide !== CardsData.length && (
          <button className="Button-right" onClick={nextSlide}>&#10095;</button>
        )}
      </div>

      {itemsPerSlide !== CardsData.length && (
        <div className="Dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`Dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DASlider;

