import React from 'react'
import PropTypes from "prop-types"
import classNames from "classnames"

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";

import {sectionHeaderText, sectionSubHeaderText} from "assets/jss/coreStyles";
import Colours from "../../assets/strings/colours";

const useStyles = makeStyles(theme => ({
    sectionHeaderText,
    container: {
        maxWidth: "1600px",
        margin: "0 auto",
    },
    light: {
        color: "white"
    },
    green: {
        color: Colours.contrast,
    },
    ternary: {
        color: Colours.ternary,
    }
}))

export default function HeaderBody(props) {
    const {header, headerColor, children} = props
    const classes = useStyles()

    let headerClass;
    switch (headerColor) {
        case "light":
            headerClass = classNames(classes.sectionHeaderText, classes.light);
            break;
        case "green":
            headerClass = classNames(classes.sectionHeaderText, classes.green);
            break;
        case "ternary":
            headerClass = classNames(classes.sectionHeaderText, classes.ternary)
            break;
        default:
            headerClass = classes.sectionHeaderText
            break;
    }

    return (
        <Grid
            container
            direction={"column"}
            justify={"center"}
            alignItems={"stretch"}
            className={classes.container}
        >
            <Grid item>
                <h1 className={headerClass}>
                    {header}
                </h1>
            </Grid>
            <Grid item>
                <br/>
            </Grid>
            <Grid item>
                {children}
            </Grid>
        </Grid>
    )
}

HeaderBody.defaultProp = {
    headerColor: "dark",
}

HeaderBody.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
    subHeader: PropTypes.string,
    headerColor: PropTypes.oneOf([
        "light",
        "dark",
        "green",
        "ternary"
    ])
}

