import React from "react";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";

import Parallax from "components/Parallax/Parallax";

import {extraSmallFont, largeFont} from "assets/jss/coreStyles";
import Colours from "assets/strings/colours";

const useStyles = makeStyles({
    container: {
        color: Colours.white,
        paddingRight: "15px",
        paddingLeft: "15px",
        paddingBottom: "25px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "70vw",
        maxWidth: "1200px",
        zIndex: "2",
        border: "solid 2px " + Colours.primary
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
        ...extraSmallFont,
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

    return (
        <>
            <Parallax image={image} filter="dark">
                <div className={classes.container}>
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
                        {/*<Grid item>
                            <hr size={30} className={classes.greenHr}/>
                        </Grid>*/}
                        <Grid item>
                            <h4 className={classes.titleSubHeading}>
                                {body}
                            </h4>
                        </Grid>
                    </Grid>
                </div>
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
