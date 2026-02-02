import "./SectionOurStory.css";
import { useEffect, useState } from "react";
import TitleAtSquer from "../TitleAtSquer/TitleAtSquer";
import Aboutdata from "../../data/Aboutdata.json";
import ProcessCard from "../ProcessCard/ProcessCard";
import AboutHeroSection from "../about_hero_section/AboutHeroSection";
import AboutSquareUp from "../AboutSquareUp/AboutSquareUp";
import AboutSquareUpImage from "/assets/img/SquareUpsectionabout.png";
import SquareUpImage from "/assets/img/LogoSq.svg";
import heroabout from "/assets/img/about us section Home+hero work.png";

const STORAGE_KEY = "aboutCards";

const SectionOurStory = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      setCards(JSON.parse(stored));
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Aboutdata));
      setCards(Aboutdata);
    }
  }, []);

  return (
    <section className="our-story">
      <AboutHeroSection
        hasButton={false}
        imageBackground={heroabout}
        titleSection="About Us"
        contentSection="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
      />

      <AboutSquareUp
        title="About SquareUp"
        description="SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
        bgImage={AboutSquareUpImage}
        icon={SquareUpImage}
      />

      <TitleAtSquer title="Our Story" className="ourstory-title" />

      <div className="our-story-card">
        {cards.map((item, index) => (
          <ProcessCard
            key={index}
            number={item.number}
            title={item.title}
            description={item.description}
            titleColor="var(--whit-green-text-color)"
          />
        ))}
      </div>
    </section>
  );
};

export default SectionOurStory;