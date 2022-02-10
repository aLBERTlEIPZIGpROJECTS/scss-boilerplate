import Navbar from "../components/Navbar"
import Icon from "../icons-img/search.svg"


const Footer = () => {

    const links1 = [
        {
            id: 0,
            link: "google.com",
            text: "google"
        },
        {
            id: 1,
            link: "twitter.com",
            text: "twitter"
        },
        {
            id: 2,
            link: "youtube.com",
            text: "youtube"
        }
    ]

    const links2 = [
        {
            id: 0,
            link: "facebook.com",
            text: "facebook",
            src: {Icon},
        },
        {
            id: 1,
            link: "linkedin.com",
            text: "linkedin",
            src: {Icon}
        },
        {
            id: 2,
            link: "instagram.com",
            text: "instagram",
            src: {Icon}
        }
    ]

    return(
        <div className="footer">
            <Navbar links = {links1} class="footer__navbar"/>
            <Navbar links = {links2} class="footer__navbar"/>
        </div>
    )
}

export default Footer