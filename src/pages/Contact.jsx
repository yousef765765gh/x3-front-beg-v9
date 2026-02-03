
import DAForm from "../components/DAForm/DAForm"
import Faq from "../components/FrequentlyAskedQuestions/Faq"
import TodaySquareUp from "../components/TodaySquareUp/TodaySquareUp"

const Contact = () => {
    return (
        <>
            <DAForm />
            <Faq/>
            <TodaySquareUp
            icon="assets/img/Logo.png"
            title="Today, SquareUp Continues to Thrive as a Leading Digital Product Agency....."
            description="Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life."
            title2="Welcome to SquareUp"
            description2="Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation."
            button="Start Project"
            />
        </>
    )
}




export default Contact;
