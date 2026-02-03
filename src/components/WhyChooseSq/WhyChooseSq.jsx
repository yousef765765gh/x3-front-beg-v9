import AboutHeroSection from "../about_hero_section/AboutHeroSection"
import OurServicesAndChoosesq from "../cardOurServicesAndChoosesq/OurServicesAndChoosesq"
import defaultChoseSquareUp from "/src/data/defaultChoseSquareUp.json"
import "./WhyChooseSq.css"
import ChooseSquareUp from "/assets/img/عامةهي مشتركة squre lap +des+mob.png"




const WhyChooseSq = () => {
    return (
        <>
            <section className="shareServicesAndChooseSq">
                <AboutHeroSection
                    hasButton={false}
                    imageBackground={ChooseSquareUp}
                    titleSection="Why Choose SquareUp?"
                    contentSection="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."/>
                <div className="yb-why-choose">
                    {defaultChoseSquareUp.map((item) => (
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
