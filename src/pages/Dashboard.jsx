import AboutDashboard from "../components/AboutDashboard/AboutDashboard"
import DashBordSecWork from "../components/DashBordSecWork/DashBordSecWork"
import DASliderDashboard from "../components/DASliderDashboard/DASliderDashboard"
import ProcessDashboard from "../components/ProcessDashboard/ProcessDashboard"
import ServicesDashboard from "../components/ServicesDashboard/ServicesDashboard";
const Dashboard = () => {
        return (
        <>
                <ServicesDashboard/>
                <DASliderDashboard/>
                <DashBordSecWork/>
                <ProcessDashboard/>  
                <AboutDashboard/>
        </>
        )
}

export default Dashboard
