import AboutDashboard from "../components/AboutDashboard/AboutDashboard"
import ChooseSquareUpCrad from "../components/ChooseSquareUpCrad/ChooseSquareUpCrad"
import DashBordSecWork from "../components/DashBordSecWork/DashBordSecWork"
import DASliderDashboard from "../components/DASliderDashboard/DASliderDashboard"
import ProcessDashboard from "../components/ProcessDashboard/ProcessDashboard"
const Dashboard = () => {
        return (
        <>
                <ChooseSquareUpCrad/>
                <DASliderDashboard/>
                <DashBordSecWork/>
                <ProcessDashboard/>  
                <AboutDashboard/>
        </>
        )
}

export default Dashboard
