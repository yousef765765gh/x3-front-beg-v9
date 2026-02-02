import AboutDashboard from "../components/AboutDashboard/AboutDashboard"
import DASliderDashboard from "../components/DASliderDashboard/DASliderDashboard"
import ProcessDashboard from "../components/ProcessDashboard/ProcessDashboard"

const Dashboard = () => {
        return (
        <>
                <DASliderDashboard/>
                <ProcessDashboard/>
                <AboutDashboard/>
        </>
        )
}

export default Dashboard
