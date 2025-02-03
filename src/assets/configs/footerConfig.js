import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/Elizabeth-Mwania",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={30}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/elizabethmwania/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={30}/>
        }
    ]
}

export default footerConfig
