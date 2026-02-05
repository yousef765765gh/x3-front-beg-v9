import Dashboardnav from "../components/Dashboardnav/Dashboardnav";
import AboutDashboard from "../components/AboutDashboard/AboutDashboard";
import ChooseSquareUpCrad from "../components/ChooseSquareUpCrad/ChooseSquareUpCrad";
import ContactTable from "../components/contactTable/contact-table";
import DashBordSecWork from "../components/DashBordSecWork/DashBordSecWork";
import DASliderDashboard from "../components/DASliderDashboard/DASliderDashboard";
import FaqCradDashboard from "../components/FaqCradDashboard/FaqCradDash";
import ProcessDashboard from "../components/ProcessDashboard/ProcessDashboard";
import ServicesDashboard from "../components/ServicesDashboard/ServicesDashboard";
import { useState } from "react";


const Dashboard = () => {
        const [activeSection, setActiveSection] = useState("services");

        const renderSection = () => {
        switch (activeSection) {
        case "Section Our Services":
                return <ServicesDashboard />;

        case "Section About":
                return <AboutDashboard />;

        case "Section What About-Us":
                return <DASliderDashboard />;

        case "Section faq":
                return <FaqCradDashboard />;

        case "Section work":
                return <DashBordSecWork />;

        case "Section Why choose SQ":
                return <ChooseSquareUpCrad />;

        case "Section process":
                return <ProcessDashboard />;

        case "Section users":
                return <ContactTable />;

        default:
                return null;
        }
        };

        return (
        <div className="dashboard-container">
        <Dashboardnav
                activeSection={activeSection}
                onChange={setActiveSection}
        />

        <main className="main-content">
                {renderSection()}
        </main>
        </div>
        );
};

export default Dashboard;
