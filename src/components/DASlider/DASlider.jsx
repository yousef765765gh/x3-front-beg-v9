import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./DASlider.css";
import testimonials from "../../data/TestimonialsCards.js";

const SliderCards = () => {
    const [cards] = useState(testimonials);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(2);

    const updateItems = () => {
        if (window.innerWidth > 1440) {
            setItemsPerSlide(cards.length); // GRID
            setCurrentIndex(0);
        } else if (window.innerWidth <= 992) {
            setItemsPerSlide(1);
        } else {
            setItemsPerSlide(2);
        }
    };

    useEffect(() => {
        updateItems();
        window.addEventListener("resize", updateItems);
        return () => window.removeEventListener("resize", updateItems);
    }, []);

    const isGrid = itemsPerSlide === cards.length; 

    const totalSlides = Math.ceil(cards.length / itemsPerSlide);

    const nextSlide = () =>
        setCurrentIndex((prev) => (prev + 1) % totalSlides);

    const prevSlide = () =>
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

    const goToSlide = (index) => setCurrentIndex(index);

    const startIndex = currentIndex * itemsPerSlide;
    let slideItems = cards.slice(startIndex, startIndex + itemsPerSlide);

    if (!isGrid && slideItems.length < itemsPerSlide) {
        slideItems = [
            ...slideItems,
            ...cards.slice(0, itemsPerSlide - slideItems.length),
        ];
    }

    return (
        <section
            className={`DA_CardsContainer ${isGrid ? "grid" : "slider"
                }`}
        >
            <div className="container-slider"></div>
            <div className="DA_Slider">
                {!isGrid && (
                    <motion.button
                        className="Button-left"
                        onClick={prevSlide}
                        whileTap={{ scale: 0.9 }}
                    >
                        &#10094;
                    </motion.button>
                )}

                <div
                    className="DA_Slide"
                    style={{ "--items-per-slide": itemsPerSlide }}
                >
                    <AnimatePresence mode={isGrid ? "sync" : "wait"}>
                        {slideItems.map((card, index) => (
                            <motion.div
                                key={index}
                                className="DA_Card"
                                initial={isGrid ? false : { opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={isGrid ? false : { opacity: 0, x: -40 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h2>{card.title}</h2>
                                <p>{card.subTitle}</p>

                                <div className="ContentCard">
                                    {card.img && (
                                        <img
                                            src={card.img}
                                            alt={card.name}
                                            className="DA_Img"
                                        />
                                    )}

                                    <div className="DA_Info">
                                        <h3>{card.name}</h3>
                                        <p>{card.job}</p>
                                    </div>

                                    {card.btn && (
                                        <button className="DA_Button">
                                            {card.btn}
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {!isGrid && (
                    <motion.button
                        className="Button-right"
                        onClick={nextSlide}
                        whileTap={{ scale: 0.9 }}
                    >
                        &#10095;
                    </motion.button>
                )}
            </div>

            {!isGrid && (
                <div className="Dots">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <span
                            key={index}
                            className={`Dot ${index === currentIndex ? "active" : ""
                                }`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default SliderCards;
