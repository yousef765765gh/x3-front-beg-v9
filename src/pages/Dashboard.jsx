import AboutDashboard from "../components/AboutDashboard/AboutDashboard"
import DASliderDashboard from "../components/DASliderDashboard/DASliderDashboard"
import ProcessDashboard from "../components/ProcessDashboard/ProcessDashboard"
import DashBordSecWork from "../components/DashBordSecWork/DashBordSecWork"
import ServicesDashboard from "../components/ServicesDashboard/ServicesDashboard";
const Dashboard = () => {
        return (
        <>
                <DASliderDashboard/>
                <DashBordSecWork/>
                <ProcessDashboard/>  
                <AboutDashboard/>
                <ServicesDashboard/>
        </>
        )
}

export default Dashboard
