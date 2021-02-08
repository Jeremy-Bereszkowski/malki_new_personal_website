import React from 'react'
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";

import HeaderParaArray from "components/GridLayouts/HeaderParaArray";
import HiddenContainer from "components/GridLayouts/HiddenContainer";

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

    const panelContent = center => (
        <HeaderParaArray
            header={header}
            para={para}
            centerText={center}
            boldHeader={true}
        />
    )

    const panel = (align) => (
        <Grid
            container
            direction={"column"}
            justify={"center"}
            alignItems={align}
            className={classes.root}
        >
            <Grid item>
                <HiddenContainer
                    smallPanel={panelContent(false)}
                    largePanel={panelContent(true)}
                />
            </Grid>
        </Grid>
    )

    return (
        <HiddenContainer
            smallPanel={panel("flex-start")}
            largePanel={panel("center")}
        />
    )
}

GeneralInfo.propTypes = {
    header: PropTypes.string.isRequired,
    para: PropTypes.array.isRequired,
}
