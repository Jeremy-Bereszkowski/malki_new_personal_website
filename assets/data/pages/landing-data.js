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
            subHeader: "I am a Family Therapist & Counsellor ",
            para: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor pulvinar quam sed maximus. Aenean sagittis justo mi, id interdum dui imperdiet non. Pellentesque commodo nibh ac vestibulum tincidunt. Donec varius malesuada erat. Sed tempus risus dolor, et tristique ex ullamcorper eget. Donec enim arcu, convallis sed efficitur ut, efficitur id magna. Duis bibendum urna turpis.",
                "Nunc vel eleifend turpis, nec lacinia erat. Vivamus sapien sem, ullamcorper et turpis id, imperdiet condimentum nulla. Nam ornare tincidunt dignissim. Nam ullamcorper purus sit amet varius malesuada. Aenean sed libero et orci tincidunt pretium. Pellentesque sit amet purus magna. Nulla sodales ac tellus in dignissim. Suspendisse ut orci dui. Vivamus egestas purus massa. Suspendisse potenti. Aliquam enim diam, efficitur eu elit eget, laoreet accumsan est. Maecenas non nulla vitae enim facilisis euismod. Vivamus tristique dignissim elit ut maximus.",
                "Quisque pellentesque est finibus iaculis efficitur. Proin mauris nisi, ornare ac eros vitae, varius faucibus turpis. Nulla ac mauris ultricies, volutpat velit sit amet, iaculis risus. Fusce finibus ut felis ut viverra. Sed porta felis odio, ac rhoncus lacus molestie id. Donec vehicula, nisl id aliquam vehicula, nisi orci volutpat tellus, quis pharetra nisl odio auctor mi. Pellentesque aliquet tempus dignissim. Praesent nec ex ligula. Maecenas erat quam, varius a tortor quis, eleifend luctus erat.",
            ]
        },
        avatar: avatar,
    },
}

export default LandingData
