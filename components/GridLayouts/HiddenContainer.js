import React from 'react'
import PropTypes from 'prop-types'

import {makeStyles} from "@material-ui/core/styles"
import {Hidden} from "@material-ui/core";

const useStyles = makeStyles({
    textMargin: {
        paddingRight: "60px",
    },
})

export default function HiddenContainer(props) {
    const {smallPanel, largePanel, dynamicSized} = props
    const classes = useStyles()

    return (
        <>
            <Hidden only={['md', "lg", 'xl']}>
                {dynamicSized ? (
                    <div>
                        {smallPanel}
                    </div>
                ) : smallPanel}
            </Hidden>
            <Hidden only={['xs', "sm"]}>
                {dynamicSized ? (
                    <div className={classes.textMargin}>
                        {largePanel}
                    </div>
                ) : largePanel}
            </Hidden>
        </>
    )
}

HiddenContainer.defaultProps = {
    dynamicSized: false
}

HiddenContainer.propTypes = {
    smallPanel: PropTypes.object.isRequired,
    largePanel: PropTypes.object.isRequired,
    dynamicSized: PropTypes.bool,
}
