import React from "react";
import classNames from "classnames"

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import HeaderFooterLayout from "layouts/HeaderFooterLayout";
import ParallaxLayout from "layouts/ParallaxLayout";

import ProfessionalProfile from "page-sections/landing-page/ProfessionalProfile";

import {grayColor} from "assets/jss/nextjs-material-kit-pro";
import data from "assets/data/pages/landing-data"
import Colours from "assets/strings/colours";

const useStyles = makeStyles({
    padding: {
        padding: "4vh 0",
        display: "absolute",
        zIndex: "7",
    },
    baseBackground: {
        backgroundColor: grayColor[14],
    },
    lightGreyBackground: {
        backgroundColor: Colours.secondary,
    },
    blueGreyBackground: {
        backgroundColor: Colours.contrast,
    },
});

export default function LandingPage(props) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();

    return (
        <HeaderFooterLayout>
            <ParallaxLayout image={data.core.background} header={data.core.header} body={data.core.body}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                >
                    <Grid item className={classNames(classes.padding, classes.baseBackground)}>
                        <ProfessionalProfile
                            data={data.aboutMe.about}
                            avatar={data.aboutMe.avatar}
                        />
                    </Grid>
                </Grid>
            </ParallaxLayout>
        </HeaderFooterLayout>
    )
}
