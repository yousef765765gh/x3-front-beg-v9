import AboutDashboard from "../components/AboutDashboard/AboutDashboard"
import DashBordSecWork from "../components/DashBordSecWork/DashBordSecWork"
import DASliderDashboard from "../components/DASliderDashboard/DASliderDashboard"
import ProcessDashboard from "../components/ProcessDashboard/ProcessDashboard"
const Dashboard = () => {
        return (
        <>
                <DASliderDashboard/>
                <DashBordSecWork/>
                <ProcessDashboard/>  
                <AboutDashboard/>
        </>
        )
}

export default Dashboard
