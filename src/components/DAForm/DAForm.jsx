import { useEffect, useState } from "react";
import "./DAForm.css";
import AboutHeroSection from "../about_hero_section/AboutHeroSection";
import heroform from "/assets/img/about us section Home+hero work.png"

const DAForm = ({ editingItem, onSave }) => {
     // Form state variables
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [yourMessage, setYourMessage] = useState("");
    const [resons, setResons] = useState([]);
    const [id, setId] = useState(null);
      // Populate form fields when editing an existing item
    useEffect(() => {
        const storedItem  = localStorage.getItem("editingItem");
        if (storedItem) {
            const item = JSON.parse(storedItem);
            setId(item.id);
            setFullName(item.fullName);
            setEmail(item.email);
            setYourMessage(item.yourMessage);
            setResons(item.resons);
            localStorage.removeItem("editingItem");
        }
    }, []);

    const handleRadioChange = (e) => {
        setResons(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
          // Create a new form entry
        const newItem = {
            id: id ? id : Date.now(),
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

        const index = items.findIndex((i) => i.id === newItem.id);
        if (index !== -1) {
            items[index] = newItem; 
        } else {
            items.push(newItem); 
        }
        localStorage.setItem("contactUsEntries", JSON.stringify(items));
        alert(`Welcome, ${fullName} to SqaureUp`);
        window.location.reload();
        }
        setFullName("");
        setEmail("");
        setYourMessage("");
        setResons([]);
    };

// Top contact icons (email, phone, location)
    const topIcons = [
        { name: "hello@squareup.com", icon: "assets/img/Icon messag footer.svg" },
        { name: "+91 91813 23 2309", icon: "assets/img/Icon phone footer.svg" },
        { name: "Get Location", icon: "assets/img/Icon  loction footer.svg" },
    ];
  // Bottom social media icons
    const bottomIcons = [
        { name: "Facebook", icon: "assets/img/Icon facbook footer.svg", url: "https://facebook.com" },
        { name: "Twitter", icon: "assets/img/Icon twiter footer.svg", url: "https://twitter.com" },
        { name: "LinkedIn", icon: "assets/img/icon linked footer.svg", url: "https://linkedin.com" },
    ];

    const openSocialLink = (link) => {
        if (link) {
            window.open(link, "_blank", "noopener,noreferrer");
        }
    };
    
    return (
        <>
        <section>
        <AboutHeroSection
                hasButton={false}
                imageBackground={heroform}
                titleSection="Contact Us"
                contentSection="Get in touch with us today and let us help you with any questions or inquiries you may have."
            />
        <div className="form-container">
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

              {/* Contact form */}
            <form className="contact-us-form" onSubmit={handleSubmit}>
                   {/* Full name and email fields */}
                <div className="name-and-email-container">
                    <div className="name-email">
                        <label htmlFor="full-name">Full Name</label>
                        <input
                            type="text"
                            id="full-name"
                            value={fullName}
                            placeholder="Type here"
                            onChange={(e) => setFullName(e.target.value)}
                            required
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
                            required
                        />
                    </div>
                </div>
                   {/* Contact reasons */}
                <div className="resons-container">
                    <label>Why are you contacting us?</label>
                    <div className="resons">
                        {["Web Design", "Collaboration", "Mobile App Design", "Others"].map((reson, i) => (
                            <label key={i} className="reson-item">
                                <input
                                    type="checkbox"              
                                    className="reson-checkbox"
                                    name="contactReason"      
                                    value={reson}
                                    checked={resons === reson} 
                                    onChange={handleRadioChange}
                                />
                                <span className="reson-title">{reson}</span>
                            </label>
                        ))}
                    </div>
                </div>
                {/* User message */}
                <div className="user-message">
                    <label htmlFor="your-message">Your Message</label>
                    <textarea
                        id="your-message"
                        value={yourMessage}
                        placeholder="Type here"
                        onChange={(e) => setYourMessage(e.target.value)}
                        required
                    />
                </div>
                 {/* Submit button */}
                <input
                    className="submit"
                    type="submit"
                    value={editingItem ? "Update" : "Submit"}
                />
            </form>
            {/* footer */}
            <div className="da-contact-down-footer">
                <div className="da-contact-down-footer-buttom">
                    <p>Operating Days</p>
                    <p className="day">Monday to Friday</p>
                </div>
                <div className="da-line"></div>
                <div className="da-contact-down-footer-stay-Connected">
                    <p className="da_font_size">Stay Connected</p>
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
        </section>
        </>
    );
};
export default DAForm;