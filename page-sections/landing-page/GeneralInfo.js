import React from 'react'
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        marginBottom: "2.5vh"
    },
    centerText: {
        textAlign: "center"
    },
})


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
        <h4 key={key} className={classes.centerText}>
            {ele}
        </h4>
    ))

    return (
        <Grid
            container
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
            className={classes.root}
        >
            <Grid item>
                <h3 className={classes.centerText}>
                    <b>
                        {header}
                    </b>
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
