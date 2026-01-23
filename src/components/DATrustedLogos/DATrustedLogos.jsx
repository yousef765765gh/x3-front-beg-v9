import "./DATrustedLogos.css";

const logos = [
    { name: "Zapier", src: "/assets/img/Logo1.png" },
    { name: "Spotify", src: "/assets/img/Logo2.png" },
    { name: "Zoom", src: "/assets/img/Logo3.png" },
    { name: "Slack", src: "/assets/img/Logo4.png" },
    { name: "Amazon", src: "/assets/img/Logo5.png" },
    { name: "Adobe", src: "/assets/img/Logo6.png" },
];

export default function LogosBar() {
    return (
    <div className="logos-wrapper">
    <p className="logos-title">Trusted by 250+ Companies</p>

    <div className="logos-box">
        <div className="logos-container">
            {logos.map((logo) => (
                <img
                    key={logo.name}
                    src={logo.src}
                    alt={logo.name}
                    className="logo"
                />
            ))}
        </div>
    </div>
</div>

    );
}