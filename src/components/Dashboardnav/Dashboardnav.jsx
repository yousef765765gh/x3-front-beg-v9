import "./Dashboardnav.css"
const DashboardSidebar = ({ activeSection, onChange }) => {
    return (
        <section>
            <aside className="sidebar">
                <h2>DashBoard Sqaure Up</h2>
                    <div className="buttonDash">
                        <button
                            className={activeSection === "Section Our Services" ? "active" : ""}
                            onClick={() => onChange("Section Our Services")}
                        >
                            Section Our Services
                        </button>

                        <button
                            className={activeSection === "Section About" ? "active" : ""}
                            onClick={() => onChange("Section About")}
                        >
                            Section About
                        </button>

                        <button
                            className={activeSection === "Section What About-Us" ? "active" : ""}
                            onClick={() => onChange("Section What About-Us")}
                        >
                            Section What About-Us
                        </button>

                        <button
                            className={activeSection === "Section faq" ? "active" : ""}
                            onClick={() => onChange("Section faq")}
                        >
                            Section FAQ
                        </button>

                        <button
                            className={activeSection === "Section work" ? "active" : ""}
                            onClick={() => onChange("Section work")}
                        >
                            Section work
                        </button>

                        <button
                            className={activeSection === "Section Why choose SQ" ? "active" : ""}
                            onClick={() => onChange("Section Why choose SQ")}
                        >
                            Section Why choose SQ
                        </button>

                    <button
                        className={activeSection === "Section process" ? "active" : ""}
                        onClick={() => onChange("Section process")}
                    >
                        Section process
                    </button>

                    <button
                        className={activeSection === "Section users" ? "active" : ""}
                        onClick={() => onChange("Section users")}
                    >
                        Users
                    </button>
                </div>
            </aside>
        </section>

    );
};

export default DashboardSidebar;