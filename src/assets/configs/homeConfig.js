import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Aness Rabia</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A data analyst",
        "A Moroccan Italian"
    ],
    about: {
        start: "I'm a student in the first year of computers science's master in University of Montpellier and i'v been working lately on many data science projects. " +
            "I'm excited by learning new things, contributing to the data science community," +
            " and spreading the word of data!",
        exit: "I'm fluent at Python, SQL databases, BI tools, and more, " +
            "with a deep interest in machine learning."
    },
    workTimeline: [
        {
            id: "work-4",
            title: "Master Software Engineer",
            company: "University of Montpellier",
            description: "I am currently pursuing a Master's degree in Software Engineering, focusing on advanced topics such as web development, mobile application development, big data analytics, data analysis, and machine learning.",
            date: "2023-Present",
            icon: <BiRocket/>,
            tags: ["Java", "Data", "python", "SQL," ,"Big Data", "Machine Learning", "Web Services", "R", "Javascript"]
        },
        {
            id: "work-3",
            title: "Bachelor Computer Science",
            company: "University of Montpellier",
            description: "I completed a Bachelor's degree in Computer Science, covering topics such as Object-Oriented Modeling and Programming, Information Systems and Databases, Web Programming, Propositional Logic, Systems, Arithmetic, Algorithms, IP Protocols and Communications, Linear Algebra, Matrix Calculus, Project Development, Formal and Scientific Computing, Software Engineering Workshops, First-order Logic, Formal Languages, and Multimedia Data Analysis.",
            date: "2020-2023",
            icon: <DiCodeigniter/>,
            tags: ["Java", "Coq", "python", "Devops", "C/C++", "SQL"]
        },
       
    ]
}


export default homeConfig