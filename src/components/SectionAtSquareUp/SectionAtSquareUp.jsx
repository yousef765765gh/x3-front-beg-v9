import "./SectionAtSquareUp.css";
import TitleAtSquer from "../TitleAtSquer/TitleAtSquer";
import { useEffect, useState } from "react";
import ProcessCard from "../ProcessCard/ProcessCard";
import processData from "../../data/ProcessDataAtSquar.json";
import heroProcess from "/assets/img/faq section Home+hero section process+contactusfaq.png";
import AboutHeroSection from "../about_hero_section/AboutHeroSection";

const STORAGE_KEY = "processCards";

const SectionAtSquareUp = () => {
  const [showAll, setShowAll] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      setCards(JSON.parse(stored));
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(processData));
      setCards(processData);
    }
  }, []);

  return (
    <section className="at-square-up">
      <AboutHeroSection
        hasButton={false}
        imageBackground={heroProcess}
        titleSection="Process of Starting the Project"
        contentSection="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
      />

      <TitleAtSquer
        title="At SquareUp"
        description="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
        subTitle="Here's an overview of our typical process:"
      />

      <div className="at-squar-card">
        {cards
          .slice(0, showAll ? cards.length : 4)
          .map((item, index) => (
            <ProcessCard
              key={index}
              number={item.number}
              title={item.title}
              description={item.description}
            />
          ))}
      </div>

      <div className="show-more-btn">
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default SectionAtSquareUp;



