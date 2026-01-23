
import OurServices from "../components/OurServices/OurServices"
import WhyChooseSq from "../components/WhyChooseSq/WhyChooseSq"
import Faq from "../components/FrequentlyAskedQuestions/Faq"
import DATestimonialsSection from "../components/DATestimonialsSection/DATestimonialsSection"
import DAHero from "../components/DAHero/DAHero"
import DATrusted from "../components/DATrustedLogos/DATrustedLogos.jsx"
const Home = () => {
    return (
        <>
            <DAHero />
            <DATrusted />
            <OurServices />
            <WhyChooseSq />
            <DATestimonialsSection />
            <Faq/>
        </>
    )
}

export default Home