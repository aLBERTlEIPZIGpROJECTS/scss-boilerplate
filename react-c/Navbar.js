import Link from "./Link"
import { useState, useEffect } from "react"


const data = [
    {
        link : "youtube.com",
        txt : "link1"
    },
    {
        link : "youtube.com",
        txt : "link2"
    },
    {
        link : "youtube.com",
        txt : "link3"
    }
]

const Navbar = (props) => {

    /* const [ navBar, setNavBar ] = (data) */



    return(
        <div className= { props.class }>
            <h2>Hello</h2>
            {/* <Link link = { props.link } txt = { props.txt } /> */}
         {/*    {
                navBar && navBar.map((link) => (
                <Link link = { data.link } txt = { data.txt } />
                ))
            } */}
        </div>
    )
}

export default Navbar