import AboutDashboard from "../components/AboutDashboard/AboutDashboard"
import ChooseSquareUpCrad from "../components/ChooseSquareUpCrad/ChooseSquareUpCrad"
import ContactTable from "../components/contactTable/contact-table"
import DashBordSecWork from "../components/DashBordSecWork/DashBordSecWork"
import DASliderDashboard from "../components/DASliderDashboard/DASliderDashboard"
import ProcessDashboard from "../components/ProcessDashboard/ProcessDashboard"
import ServicesDashboard from "../components/ServicesDashboard/ServicesDashboard";
const Dashboard = () => {
        return (
        <>
                <ContactTable/>
                <ServicesDashboard/>
                <ChooseSquareUpCrad/>
                <DASliderDashboard/>
                <DashBordSecWork/>
                <ProcessDashboard/>  
                <AboutDashboard/>
        </>
        )
}

export default Dashboard
