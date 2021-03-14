import React from "react";

import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import {MAIL_LINK, TEL_LINK, URLS} from "../../strings/urls";
import Colours from "../../strings/colours";
import {phone_string} from "../global";

export const HeaderData = [
    {
        href: TEL_LINK,
        mobileOnClick: true,
        icon: <PhoneIcon style={{color: Colours.grayColor[1]}} />,
        tip: phone_string,
    },
    {
        href: MAIL_LINK,
        icon: <MailOutlineIcon style={{color: Colours.grayColor[1]}} />,
        tip: "Email",
    },
    {
        href: URLS.LINKEDIN_PROFILE,
        icon: <LinkedInIcon style={{color: Colours.grayColor[1]}} />,
        tip: "LinkedIn",
    }
]
