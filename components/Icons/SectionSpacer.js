import React from "react";
import classNames from "classnames";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import FlareIcon from "@material-ui/icons/Flare";

import {grayColor} from "../../assets/jss/nextjs-material-kit-pro";

const useStyles = makeStyles({
    padding: {
        padding: "4vh 0",
        display: "absolute",
        zIndex: "7",
    },
    baseBackground: {
        backgroundColor: grayColor[14],
    },
})

export default function SectionSpacer(props) {
    const classes = useStyles()

    return (
        <Grid item className={classNames(classes.padding, classes.baseBackground)}>
            <Grid
                container
                direction={"column"}
                justify={"center"}
                alignItems={"center"}
            >
                <Grid item>
                    <FlareIcon style={{margin: "0 auto"}}/>
                </Grid>
            </Grid>
        </Grid>
    )
}
