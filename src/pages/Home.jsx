import OurServices from "../components/OurServices/OurServices"
import WhyChooseSq from "../components/OurServices/WhyChooseSq"
// import DATestimonialsSection from "../components/DATestimonialsSection/DATestimonialsSection"
import DAHero from "../components/DAHero/DAHero"
import DATrusted from "../components/DATrustedLogos/DATrustedLogos"


const Home = () => {
    return (
        <>
            <DAHero />
            <DATrusted/>
            <OurServices />
            <WhyChooseSq />
            {/* <DATestimonialsSection /> */}
        </>
    )
}

export default Home