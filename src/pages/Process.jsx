import AboutHeroSection from "../components/about_hero_section/AboutHeroSection";
import SectionAtSquareUp from "../components/SectionAtSquareUp/SectionAtSquareUp"
import imgstart from "/assets/img/contact p Home+work +process.png"
import sqicon from "/assets/img/LogoSq.svg"

const Process = () => {
    return (
        <>
            <SectionAtSquareUp/>
            <AboutHeroSection
                hasButton={true}
                imageBackground={imgstart}
                imageIcone={sqicon}
                titleSection="Thank you for your Interest in SquareUp."
                contentSection="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
                buttonText="Start Project"
            />
        </>
    )
}

export default Process;