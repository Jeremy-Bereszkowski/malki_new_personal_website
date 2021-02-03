import React from 'react'
import PropTypes from 'prop-types'

import {Grid} from "@material-ui/core";

export default function ThreeQuarterGrid(props) {
    const {leftPanel, rightPanel, rootClassName} = props

    return (
        <Grid
            container
            spacing={3}
            direction={"row"}
            justify={"space-between"}
            alignContent={"center"}
            alignItems={"center"}
            className={rootClassName}
        >
            <Grid item xs={12} md={8}>
                {leftPanel}
            </Grid>
            <Grid item xs={12} md={3}>
                {rightPanel}
            </Grid>
        </Grid>
    )
}

ThreeQuarterGrid.defaultProps = {}

ThreeQuarterGrid.propTypes = {
    leftPanel: PropTypes.object,
    rightPanel: PropTypes.object,
    rootClassName: PropTypes.string,
}
