import React from 'react'
import classNames from "classnames"
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"

import {sectionHeight} from "assets/jss/coreStyles";
import ThreeQuarterGrid from "../../components/GridLayouts/ThreeQuarterGrid";
import HeaderBody from "../../components/GridLayouts/HeaderBody";

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

    const leftPanel = (
        <div className={classes.textMargin}>
            <HeaderBody
                header={treatmentApproach.header}
                para={treatmentApproach.para}
                centerText={false}
                boldHeader={true}
            />
        </div>
    )

    const rightPanel = (
        <div>
            <HeaderBody
                header={languages.header}
                para={languages.para}
                centerText={false}
                boldHeader={false}
                list={true}
            />
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
