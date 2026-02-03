import AboutDashboard from "../components/AboutDashboard/AboutDashboard"
import DASliderDashboard from "../components/DASliderDashboard/DASliderDashboard"
import ProcessDashboard from "../components/ProcessDashboard/ProcessDashboard"
// import DashBordSecWork from "../components/DashBordSecWork/DashBordSecWork"
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
