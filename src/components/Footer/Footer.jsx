import IconButton from "./IconButton"
import "./Footer.css"
import Secound_type_footer from "./Secound_type_footer"
const Footer = ({logo,items = []}) => {
    const iconbutton =[
        {
            Social_Media:"#",
            image:"/assets/img/Icon facbook footer.svg"
        },
        {
            Social_Media:"#",
            image:"/assets/img/Icon twiter footer.svg"
        },
        {
            Social_Media:"#",
            image:"/assets/img/icon linked footer.svg"
        }
    ]
    const infoContact = [
        {
            logoContact : "/assets/img/Icon messag footer.svg",
            content :"hello@squareup.com"
        },
        {
            logoContact : "/assets/img/Icon phone footer.svg",
            content :"+91 91813 23 2309"
        },
        {
            logoContact : "/assets/img/Icon  loction footer.svg",
            content :"Somewhere in the World"
        },
    ]
    return (
        <footer>
            <div className="first_type_footer">
                <h1><img src={logo} alt="" /></h1>
                <ul className="all-page">
                    {items.map((item,index) =>(
                        <li key={index}>{item.content}</li>
                ))}
                </ul>
                <IconButton
                items = {iconbutton}
                />
            </div>
            <div className="line"></div>
            <Secound_type_footer
                items = {infoContact}
            />
        </footer>
    )
}

export default Footer
