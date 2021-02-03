import React from 'react'
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"

import {sectionHeight} from "assets/jss/coreStyles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    sectionHeight,
    margin: {
        margin: "2.5vh auto",
        maxWidth: "85%",
    },
    textMargin: {
        paddingRight: "60px",
    },
}))


/**
 * Qualifications Page Section Component
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function GeneralInfo(props) {
    const {header, para} = props
    const classes = useStyles()

    const paraArray = para.map((ele, key) => (
        <h5 key={key}>
            {ele}
        </h5>
    ))

    return (
        <Grid
            container
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
        >
            <Grid item>
                <h3>
                    {header}
                </h3>
                <br/>
                <br/>
                {paraArray}
            </Grid>
        </Grid>
    )
}

GeneralInfo.propTypes = {
    header: PropTypes.string.isRequired,
    para: PropTypes.array.isRequired,
}
