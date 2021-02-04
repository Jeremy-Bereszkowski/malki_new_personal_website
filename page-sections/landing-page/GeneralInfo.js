import React from 'react'
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";

import HeaderParaArray from "components/GridLayouts/HeaderParaArray";

import {sectionHeight} from "assets/jss/coreStyles";
import {Hidden} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        ...sectionHeight,
        margin: "2.5vh auto",
        maxWidth: "85%",
    },
})


/**
 * General Info Section Component
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function GeneralInfo(props) {
    const {header, para} = props
    const classes = useStyles()

    const panelContent = center => (
        <HeaderParaArray
            header={header}
            para={para}
            centerText={center}
            boldHeader={true}
        />
    )

    return (
        <Grid
            container
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
            className={classes.root}
        >
            <Grid item>
                <Hidden only={['md', "lg", 'xl']}>
                    {panelContent(false)}
                </Hidden>
                <Hidden only={['xs', "sm"]}>
                    {panelContent(true)}
                </Hidden>
            </Grid>
        </Grid>
    )
}

GeneralInfo.propTypes = {
    header: PropTypes.string.isRequired,
    para: PropTypes.array.isRequired,
}
