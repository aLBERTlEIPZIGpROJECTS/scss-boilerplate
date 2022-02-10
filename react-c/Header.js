import HeaderNameLeft from "./HeaderNameLeft"
import HeaderNavbar from "./HeaderNavbar"

const links = [
    {
        id: 0,
        link: "google.com",
        text: "google"
    },
    {
        id: 1,
        link: "youtube.com",
        text: "youtube"
    },
    {
        id: 2,
        link: "twitter.com",
        text: "twitter"
    }
]

const Header = () => {
    return(
        <div className="header">
            <HeaderNameLeft />         
            <HeaderNavbar links = {links} />         
        </div>
    )
} 

export default Header