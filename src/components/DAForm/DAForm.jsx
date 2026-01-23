import { useEffect, useState } from "react";
import "./DAForm.css";

const MmContactUsForm = ({ editingItem, onSave }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [yourMessage, setYourMessage] = useState("");
    const [resons, setResons] = useState([]);

    useEffect(() => {
        if (editingItem) {
            setFullName(editingItem.fullName || "");
            setEmail(editingItem.email || "");
            setYourMessage(editingItem.yourMessage || "");
            setResons(editingItem.resons || []);
        }
    }, [editingItem]);

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setResons([...resons, value]);
        } else {
            setResons(resons.filter((item) => item !== value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: editingItem ? editingItem.id : Date.now(),
            fullName,
            email,
            resons,
            yourMessage,
        };

        if (onSave) {
            onSave(newItem, !!editingItem);
        } else {
            const stored = localStorage.getItem("contactUsEntries");
            const items = stored ? JSON.parse(stored) : [];
            localStorage.setItem(
                "contactUsEntries",
                JSON.stringify([...items, newItem])
            );
        }

        setFullName("");
        setEmail("");
        setYourMessage("");
        setResons([]);
    };

    const topIcons = [
        { name: "hello@squareup.com", icon: "/assets/img/Icon messag footer.svg" },
        { name: "+91 91813 23 2309", icon: "/assets/img/Icon phone footer.svg" },
        { name: "Get Location", icon: "/assets/img/Icon  loction footer.svg" },
    ];

    const bottomIcons = [
        { name: "Facebook", icon: "/assets/img/Icon facbook footer.svg", url: "https://facebook.com" },
        { name: "Twitter", icon: "/assets/img/Icon twiter footer.svg", url: "https://twitter.com" },
        { name: "LinkedIn", icon: "/assets/img/icon linked footer.svg", url: "https://linkedin.com" },
    ];

    const openSocialLink = (link) => {
        if (link) {
            window.open(link, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div className="form-contact-us-container">
            {/* up icons */}
            <div className="da-contact-contactIcons">
                {topIcons.map((item, index) => (
                    <div
                        key={index}
                        className="da-contact-contactIcon"
                        onClick={() => openSocialLink(item.url)}
                    >
                        <img src={item.icon} alt={item.name} className={`icon${index + 1}`} />
                        <span className="da_font_size_weight3">{item.name}</span>
                    </div>
                ))}
            </div>

            {/* form */}
            <form className="contact-us-form" onSubmit={handleSubmit}>
                <div className="name-and-email-container">
                    <div className="name-email">
                        <label htmlFor="full-name">Full Name</label>
                        <input
                            type="text"
                            id="full-name"
                            value={fullName}
                            placeholder="Type here"
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>

                    <div className="name-email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            placeholder="Type here"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="resons-container">
                    <label>Why are you contacting us?</label>
                    <div className="resons">
                        {["Web Design", "Collaboration", "Mobile App Design", "Others"].map((reson, i) => (
                            <label key={i}>
                                <input
                                    type="checkbox"
                                    className="reson-checkbox"
                                    value={reson}
                                    checked={resons.includes(reson)}
                                    onChange={handleCheckboxChange}
                                />
                                {reson}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="user-message">
                    <label htmlFor="your-message">Your Message</label>
                    <textarea
                        id="your-message"
                        value={yourMessage}
                        placeholder="Type here"
                        onChange={(e) => setYourMessage(e.target.value)}
                    />
                </div>

                <input
                    className="send"
                    type="submit"
                    value={editingItem ? "Update" : "Submit"}
                />
            </form>

            {/* footer */}
            <div className="da-contact-down-footer">
                <div className="da-contact-down-footer-buttom">
                    <p>Operating Days</p>
                    <p className="monday-to-friday">Monday to Friday</p>
                </div>

                <div className="da-contact-line"></div>

                <div className="da-contact-down-footer-stay-Connected">
                    <p className="da_font_size_weight2">Stay Connected</p>
                    <div className="da-contact-socialIcons">
                        {bottomIcons.map((item, index) => (
                            <div
                                key={index}
                                className="da-contact-socialLink"
                                onClick={() => openSocialLink(item.url)}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="da-contact-socialIcon"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MmContactUsForm;
