import React from 'react'
import PropTypes from 'prop-types'

import {Grid} from "@material-ui/core";

export default function ThreeQuarterGrid(props) {
    const {leftPanel, rightPanel, rootClassName, alignCenter} = props
    const align = alignCenter ? "center" : "flex-start"

    return (
        <Grid
            container
            direction={"row"}
            justify={"space-between"}
            alignContent={"center"}
            alignItems={align}
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

ThreeQuarterGrid.defaultProps = {
    alignCenter: false
}

ThreeQuarterGrid.propTypes = {
    leftPanel: PropTypes.object.isRequired,
    rightPanel: PropTypes.object.isRequired,
    rootClassName: PropTypes.string,
    alignCenter: PropTypes.bool,
}
