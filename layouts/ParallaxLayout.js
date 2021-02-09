import React from "react";
import PropTypes from "prop-types"
import classNames from "classnames"

import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";

import Parallax from "components/Parallax/Parallax";

import {largeFont, smallFont} from "assets/jss/coreStyles";
import Colours from "assets/strings/colours";
import HiddenContainer from "../components/GridLayouts/HiddenContainer";

const useStyles = makeStyles({
    container: {
        color: Colours.white,
        paddingRight: "15px",
        paddingLeft: "15px",
        paddingBottom: "25px",
        marginRight: "auto",
        marginLeft: "auto",
        maxWidth: "1200px",
        zIndex: "2",
        border: "solid 2px " + Colours.primary
    },
    wide: {
        width: "80vw",
    },
    skinny: {
        width: "60vw",
    },
    title: {
        ...largeFont,
        fontWeight: "700",
        color: Colours.white,
        textDecoration: "none",
        textTransform: "uppercase",
        textAlign: "center",
        marginTop: "30px",
        marginBottom: "-5px",
        minHeight: "32px",
    },
    titleSubHeading: {
        ...smallFont,
        fontWeight: "350",
        color: Colours.white,
        textDecoration: "none",
        textTransform: "uppercase",
        textAlign: "center",
        margin: "0",
    },
    greenHr: {
        borderTop: "7px solid " + Colours.secondary,
        marginLeft: "10%",
        marginRight: "10%",
    },
})

export default function ParallaxLayout(props) {
    const {children, image, header, body} = props
    const classes = useStyles()

    const panelContent = containerClass => (
        <div className={containerClass}>
            <Grid
                container
                direction={"column"}
                justify={"center"}
                alignContent={"center"}
            >
                <Grid item>
                    <h1 className={classes.title}>{header}</h1>
                </Grid>
            </Grid>
            <Grid
                container
                direction={"column"}
                justify={"center"}
                alignContent={"stretch"}
            >
                <Grid item>
                    <hr size={30} className={classes.greenHr}/>
                </Grid>
                <Grid item>
                    <h4 className={classes.titleSubHeading}>
                        {body}
                    </h4>
                </Grid>
            </Grid>
        </div>
    )

    return (
        <>
            <Parallax image={image} filter="dark">
                <HiddenContainer
                    smallPanel={panelContent(classNames(classes.container, classes.wide))}
                    largePanel={panelContent(classNames(classes.container, classes.skinny))}
                />
            </Parallax>
            {children}
        </>
    )
}

ParallaxLayout.propTypes = {
    image: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string,
}
