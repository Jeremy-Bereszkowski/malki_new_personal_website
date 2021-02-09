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
        backgroundColor: Colours.grayColor[14],
    },
    large: {
        maxWidth: "35px",
        maxHeight: "35px",
    },
    italics: {
        fontStyle: "italic",
    }
});

export default function SectionSpacer() {
    const classes = useStyles()

    return (
        <Grid item className={classNames(classes.padding, classes.baseBackground)}>
            <Grid
                container
                direction={"column"}
                justify={"center"}
                alignItems={"center"}
            >
                <Grid>
                    <Grid
                        container
                        direction={"row"}
                        justify={"center"}
                        alignItems={"center"}
                    >
                        <Grid item>
                            <img src={PuzzleIcon} className={classes.large}/>
                        </Grid>
                        <Grid item>
                            <img src={PuzzleIcon} className={classes.large}/>
                        </Grid>
                        <Grid item>
                            <img src={PuzzleIcon} className={classes.large}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid>
                    <h6 className={classes.italics}>
                        Working Together
                    </h6>
                </Grid>
            </Grid>
        </Grid>
    )
}
