import { useState } from "react";
import worksJson from "../../data/worksCard.json";
import "./WorksSection.css";
import workpic from "/assets/img/about us section Home+hero work.png"

import WorksCard from "../WorksCard/WorksCard";
import AboutHeroSection from "../about_hero_section/AboutHeroSection";
import TitleAtSquer from "../TitleAtSquer/TitleAtSquer";
const WorksSection = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleWorks = showAll ? worksJson : worksJson.slice(0, 4);
    return (
        <section className="l-work">
            <AboutHeroSection
                hasButton={false}
                imageBackground={workpic}
                titleSection="Our Works"
                contentSection="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
            />
            <TitleAtSquer
                title="At SquareUp"
                description="We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
                subTitle="Here are ten examples of our notable works:"
            />
            <div className="works-div">
                <div className="works-grid">
                    {visibleWorks.map((work) => (
                        <WorksCard key={work.id} work={work} />
                    ))}
                </div>
                <button className="toggle-btn" onClick={() => setShowAll(!showAll)}>
                    {showAll ? "Show Less" : "Show More"}
                </button>
            </div>
        </section>
    )
}

export default WorksSection