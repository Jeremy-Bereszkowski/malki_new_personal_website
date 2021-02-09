import React from "react";
import classNames from "classnames";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const PuzzleIcon = "/puzzle_icon.png";

import Colours from "assets/strings/colours";

const useStyles = makeStyles({
    padding: {
        padding: "4vh 0",
        display: "absolute",
        zIndex: "7",
    },
    baseBackground: {
        backgroundColor: Colours.grayColor[14],
    },
    large: {
        maxWidth: "30px",
        maxHeight: "30px",
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
            >
                <Grid item>
                    <img src={PuzzleIcon} className={classes.large}/>
                    {/*<PuzzleIcon/>*/}
                </Grid>
                <Grid item>
                    <img src={PuzzleIcon} className={classes.large}/>
                    {/*<PuzzleIcon/>*/}
                </Grid>
                <Grid item>
                    <img src={PuzzleIcon} className={classes.large}/>
                    {/*<PuzzleIcon/>*/}
                </Grid>
            </Grid>
        </Grid>
    )
}
