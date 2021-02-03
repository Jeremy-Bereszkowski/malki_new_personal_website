import React from 'react'
import classNames from "classnames"
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"

import {sectionHeight} from "assets/jss/coreStyles";
import ThreeQuarterGrid from "../../components/GridLayouts/ThreeQuarterGrid";

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
 * TreatmentApproach Page Section Component
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function TreatmentApproach(props) {
    const {qualifications, specialities} = props
    const classes = useStyles()

    const leftPara = qualifications.para.map((ele, key) => (
        <h5 key={key}>
            {ele}
        </h5>
    ))

    const rightPara = specialities.para.map((ele, key) => (
        <li key={key}>
            {ele}
        </li>
    ))

    const leftPanel = (
        <div className={classes.textMargin}>
            <h3>
                {qualifications.header}
            </h3>
            <br/>
            <br/>
            {leftPara}
        </div>
    )

    const rightPanel = (
        <div>
            <h3>
                {specialities.header}
            </h3>
            <br/>
            <br/>
            <ul>
                {rightPara}
            </ul>
        </div>
    )

    return (
        <ThreeQuarterGrid
            leftPanel={leftPanel}
            rightPanel={rightPanel}
            rootClassName={classNames(classes.sectionHeight, classes.margin)}
        />
    )
}

TreatmentApproach.propTypes = {
    qualifications: PropTypes.object.isRequired,
    specialities: PropTypes.object.isRequired,
}
