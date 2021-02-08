import React from "react";
import classNames from "classnames";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import FlareIcon from "@material-ui/icons/Flare";
import ExtensionIcon from '@material-ui/icons/Extension';

const PuzzleIcon = "/puzzle_icon.png";

import Colours from "assets/strings/colours";

const useStyles = makeStyles(theme=>({
    padding: {
        padding: "4vh 0",
        display: "absolute",
        zIndex: "7",
    },
    baseBackground: {
        backgroundColor: Colours.grayColor[14],
    },
    large: {
        width: theme.spacing(3.75),
        height: theme.spacing(3.75),
    },
}))

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
