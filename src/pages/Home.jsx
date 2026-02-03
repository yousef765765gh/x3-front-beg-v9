
import OurServices from "../components/OurServices/OurServices"
import WhyChooseSq from "../components/WhyChooseSq/WhyChooseSq"
import Faq from "../components/FrequentlyAskedQuestions/Faq"
import DATestimonialsSection from "../components/DATestimonialsSection/DATestimonialsSection"
import DAHero from "../components/DAHero/DAHero"
import DATrusted from "../components/DATrustedLogos/DATrustedLogos.jsx"
import thankSquareUp from "/assets/img/about us section Home+hero work.png"
import sqicon from "/assets/img/LogoSq.svg"
import AboutHeroSection from "../components/about_hero_section/AboutHeroSection.jsx"
const Home = () => {
    return (
        <>
            <DAHero
                image="/assets/img/heroSection p Home.png"
                title="A Digital Product Studio that will Work"
                btn1="Our Work"
                btn2="Contact Us"
            />
            <DATrusted />
            <OurServices />
            <WhyChooseSq />
            <DATestimonialsSection />
            <Faq/>
            <AboutHeroSection
                hasButton={true}
                imageBackground={thankSquareUp}
                imageIcone={sqicon}
                titleSection="Thank you for your Interest in SquareUp."
                contentSection="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
                buttonText="Start Project"
            />
        </>
    )
}

           
       

export default Home;