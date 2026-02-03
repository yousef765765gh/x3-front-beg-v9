import AboutHeroSection from "../about_hero_section/AboutHeroSection"
import OurServicesAndChoosesq from "../cardOurServicesAndChoosesq/OurServicesAndChoosesq"
import defaultServices from "/src/data/defaultServices.json"
import "./OueServices.css"
import OurServer from "/assets/img/services p Home + hero p about.png";

const OurServices = () => {
  return (
    <>
        <section className="shareServicesAndChooseSq">
                    <AboutHeroSection
                        hasButton={false}
                        imageBackground={OurServer}
                        titleSection="Our Services"
                        contentSection="Transform your brand with our innovative digital solutions that captivate and engage your audience."/>
                    <div className="yb-our-services">
                        {defaultServices.map((item) => (
                            <OurServicesAndChoosesq
                                showButton = {true}
                                key={item.id}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                horizontal={false}
                                contentBtn={item.contentBtn}
                            />
                            ))}
                    </div>
                </section>
    </>
  )
}

export default OurServices
