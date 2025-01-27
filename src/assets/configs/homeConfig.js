import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Elizabeth Mwania</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Machine Learning Specialist",
        "A Credit risk Analyst",
        "A Sofware Developer",
        "A Kenyan"
    ],
    about: {
        start: "I'm a Mastercard Scholar at AIMS persuing MSc. Mathematical Science - Data Science specialization. " +
            "I'm excited by learning new things, contributing to the data science community," +
            " and giving insights about data!",
        exit: "I'm fluent at Python, R, SQL databases, Excel, and more, " +
            "with a deep interest in machine learning."
    },
    workTimeline: [
        {
            id: "work-4",
            title: "Software Developer",
            company: "Kenya Revenue Authority",
            description: "Build business models"+
            "and system enhancement",
            date: "November 2021-August 2024",
            icon: <BsClipboardData/>,
            tags: ["Java", "Spring Boot", "Oracle Database", "System Requirement Analysis", "REST API", "Integration"]
        },
        {
            id: "work-4",
            title: "Oracle Cloud Infrastructure Specialist",
            company: "Oracle",
            description: "Oracle graduate training on low-code applications with APEX, data analytics, OCI and autonomous database.",
            date: "March 2022-August 2022",
            icon: <BiRocket/>,
            tags: ["Data Analytics", "OCI", "Java", "Oracle Gen-AI", "Oracle database"]
        },
        {
            id: "work-3",
            title: "Finance analyst",
            company: "Jirani Smart Microfinance Limited",
            description: "Developed recommendations to optimize financial systems;" +
                "to ensure data-driven decision-making and seamless operations",
            date: "2021-2023",
            icon: <DiCodeigniter/>,
            tags: ["Documentation", "Excel", "Requrement gathering", "SQL", "Analysis", "Modelling"]
        },
        {
            id: "work-2",
            title: "Data Specialist",
            company: "The Judiciary",
            description: "Led a team of 10 officers as data specialist in Case Tracking System (CTS) of The Judiciary of Kenya " +
                "Performed data management processes" +
                 "and analyzed statistical orders to provide actionable insights for decision-making",
            date: "December 2020- July 2021",
            icon: <FaMobileAlt/>,
            tags: ["Data Management","Excel", "Data processing", "SQL", "Organization", "Data Integrity"]
        },
        {
            id: "work-1",
            title: "Data Analyst",
            company: "Maseno University",
            description: "Led data analysis projects to support decision-making and strategic planning. " +
                "Preprocess daata and build forecast models. Delivered actionable insights through comprehensive reports for executives and project teams.",
            date: "September 2020 - December 2020",
            icon: <GiCommercialAirplane/>,
            tags: ["data analysis", "python", "sql", "power bi", "data visualization"]
        },
        {
            id: "work-0",
            title: "Software Developer",
            company: "University of Nairobi Enterprises and Services Limited (UNES)",
            description: "Led HealthIT project, Nairobi Kenya funded by USAID. "+
            "In collaboration with the Government of Kenya (GoK)- Ministry of Health, "+
            "the project aimed to ensure evidence-based decision making in UHC (Universal Health Coverage)",
            date: "April 2019-August 2019",
            icon: <BsClipboardData/>,
            tags: ["Python", "Django", "CCS3", "HTML5", "SQLite3", "Excel"]
        }
    ]
}


export default homeConfig