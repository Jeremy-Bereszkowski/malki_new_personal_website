import React from "react";
import PropTypes from "prop-types"
import classNames from "classnames"

import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";

import Parallax from "components/Parallax/Parallax";

import {largeFont, smallFont} from "assets/jss/coreStyles";
import Colours from "assets/strings/colours";

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
        width: "65vw",
        minWidth: "300px",
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
    italics: {
        fontStyle: "italic",
    },
    greenHr: {
        borderTop: "7px solid " + Colours.secondary,
        marginLeft: "10%",
        marginRight: "10%",
    },
})

export default function ParallaxLayout(props) {
    const {children, image, header, body, alt} = props
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
                {
                    alt !== undefined ? (
                        <Grid item>
                            <h4 className={classNames(classes.titleSubHeading, classes.italics)}>
                                {alt}
                            </h4>
                        </Grid>
                    ) : null
                }
            </Grid>
        </div>
    )

    return (
        <>
            <Parallax image={image} filter="dark">
                {panelContent(classNames(classes.container, classes.wide))}
            </Parallax>
            {children}
        </>
    )
}

ParallaxLayout.propTypes = {
    image: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    alt: PropTypes.string,
}
