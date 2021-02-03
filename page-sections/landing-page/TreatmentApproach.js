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
    const {treatmentApproach, languages} = props
    const classes = useStyles()

    const leftPara = treatmentApproach.para.map((ele, key) => (
        <h5 key={key}>
            {ele}
        </h5>
    ))

    const rightPara = languages.para.map((ele, key) => (
        <li key={key}>
            {ele}
        </li>
    ))

    const leftPanel = (
        <div className={classes.textMargin}>
            <h3>
                <b>
                    {treatmentApproach.header}
                </b>
            </h3>
            <br/>
            <br/>
            {leftPara}
        </div>
    )

    const rightPanel = (
        <div>
            <h3>
                {languages.header}
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
    treatmentApproach: PropTypes.object.isRequired,
    languages: PropTypes.object.isRequired,
}
