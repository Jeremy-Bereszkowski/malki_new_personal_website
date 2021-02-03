import React from "react";

import {fullName} from "../global";

const footpathBackground = "/footpath-background.jpg"
const lighthouseBackground = "/lighthouse-background.jpg"
const avatar = null

const LandingData = {
    core: {
        header: fullName,
        body: "Family Therapist & Counsellor",
        background: lighthouseBackground,
    },
    aboutMe: {
        header: "About Me",
        subHeader: "A snapshot of myself",
        about: {
            header: `My name is ${fullName},`,
            subHeader: "A computer science and engineering " +
                "student at RMIT University from Melbourne, Australia.",
            para: [
                "Highly organized and detail-oriented honours student with a strong focus on consumer-facing design and experiences.",
                "Having experience across a wide range of technologies and frameworks including ReactJS, Android and cloud infrastructures including AWS & Google Cloud.",
                "Studying a double degree in both software and hardware, this has provided me with a unique perspective and approach when problem-solving projects. I look forward to bringing this distinctive viewpoint into all aspects of my work.",
            ]
        },
        avatar: avatar,
    },
}

export default LandingData
