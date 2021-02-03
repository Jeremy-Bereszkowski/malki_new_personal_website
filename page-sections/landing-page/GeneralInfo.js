import React from 'react'
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";

import HeaderParaArray from "components/GridLayouts/HeaderParaArray";

import {sectionHeight} from "assets/jss/coreStyles";

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

    return (
        <Grid
            container
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
            className={classes.root}
        >
            <Grid item>
                <HeaderParaArray
                    header={header}
                    para={para}
                    centerText={true}
                    boldHeader={true}
                />
            </Grid>
        </Grid>
    )
}

GeneralInfo.propTypes = {
    header: PropTypes.string.isRequired,
    para: PropTypes.array.isRequired,
}
