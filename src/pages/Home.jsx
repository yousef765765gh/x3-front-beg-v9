import OurServices from "../components/OurServices/OurServices"
import defaultServices from "../data/defaultServices.json"
import defaultChoseSquareUp from "../data/defaultChoseSquareUp.json"
import OurServer from "/public/assets/img/services p Home + hero p about.png";
import ChooseSquareUp from "/public/assets/img/"

const Home = () => {
    return (
        <>
        {/* <AboutHeroSection
                hasButton={false}
                imageBackground={OurServer}
                titleSection="Our Services"
                contentSection="Transform your brand with our innovative digital solutions that captivate and engage your audience."/> */}
            <div className="yb-our-services">
                {defaultServices.map((item) => (
                    <OurServices
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        horizontal={false}
                        showButton={item.showButton}
                    />
                ))}
            </div>
            {/* <AboutHeroSection
                hasButton={false}
                imageBackground={ChooseSquareUp}
                titleSection="Why Choose SquareUp?"
                contentSection="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."/>
            <div className="yb-why-choose"> */}
                {defaultChoseSquareUp.map((item) => (
                    <OurServices
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        horizontal={true}
                    />
                ))}
            </div>
        </>
    )
}

export default Home