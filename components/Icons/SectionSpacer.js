import React from "react";
import classNames from "classnames";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import Colours from "assets/strings/colours";

const PuzzleIcon = "/puzzle_icon.png";

const useStyles = makeStyles({
    padding: {
        padding: "4vh 0",
        display: "absolute",
        zIndex: "7",
    },
    baseBackground: {
        backgroundColor: Colours.grayColor[2],
    },
    large: {
        maxWidth: "35px",
        maxHeight: "35px",
    },
});

export default function SectionSpacer() {
    const classes = useStyles()

    return (
        <Grid item className={classNames(classes.padding, classes.baseBackground)}>
            <Grid
                container
                direction={"row"}
                justify={"center"}
                alignItems={"center"}
                alignContent={"center"}
            >
                <Grid item>
                    <img src={PuzzleIcon} className={classes.large}/>
                </Grid>
                <Grid item>
                    <p style={{fontStyle: "italic", margin: "auto 2vw"}}>
                        <b>
                            Working Together
                        </b>
                    </p>
                </Grid>
                <Grid item>
                    <img src={PuzzleIcon} className={classes.large}/>
                </Grid>
            </Grid>
        </Grid>
    )
}
