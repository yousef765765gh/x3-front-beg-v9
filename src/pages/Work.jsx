import sqicon from "/assets/img/LogoSq.svg"
import workpic from "/assets/img/about us section Home+hero work.png"
import WorksSection from "../components/WorksSection/WorksSection"
import AboutHeroSection from "../components/about_hero_section/AboutHeroSection"

const Work = () => {
    return (
        <>
            <WorksSection />
            <AboutHeroSection
                hasButton={true}
                imageBackground={workpic}
                imageIcone={sqicon}
                titleSection="Let us Bring your Ideas to Life in the Digital World."
                contentSection="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
                buttonText="Start Project"
            />
        </>
    )
}

           
        

export default Work;