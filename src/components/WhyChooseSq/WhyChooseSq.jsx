import AboutHeroSection from "../about_hero_section/AboutHeroSection"
import OurServicesAndChoosesq from "../cardOurServicesAndChoosesq/OurServicesAndChoosesq"
import defaultChoseSquareUp from "/src/data/defaultChoseSquareUp.json"
import "./WhyChooseSq.css"
import ChooseSquareUp from "/assets/img/عامةهي مشتركة squre lap +des+mob.png"
import { useEffect, useState } from "react"

const STORAGE_KEY = "whyChooseCard";

const WhyChooseSq = () => {
    const [data, setData] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultChoseSquareUp
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }, [data]);
    return (
        <>
            <section className="shareServicesAndChooseSq">
                <AboutHeroSection
                    hasButton={false}
                    imageBackground={ChooseSquareUp}
                    titleSection="Why Choose SquareUp?"
                    contentSection="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."/>
                <div className="yb-why-choose">
                    {data.map((item) => (
                        <OurServicesAndChoosesq
                            showButton = {false}
                            key={item.id}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            horizontal={true}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default WhyChooseSq
