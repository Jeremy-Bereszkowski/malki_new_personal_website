import React from 'react'
import classNames from "classnames"
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"

import {sectionHeight} from "assets/jss/coreStyles";
import ThreeQuarterGrid from "../../components/GridLayouts/ThreeQuarterGrid";
import HeaderParaArray from "../../components/GridLayouts/HeaderParaArray";

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
export default function Qualifications(props) {
    const {qualifications, specialities} = props
    const classes = useStyles()

    const leftPanel = (
        <div className={classes.textMargin}>
            <HeaderParaArray
                header={qualifications.header}
                para={qualifications.para}
                centerText={false}
                boldHeader={true}
            />
        </div>
    )

    const rightPanel = (
        <div>
            <HeaderParaArray
                header={specialities.header}
                para={specialities.para}
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

Qualifications.propTypes = {
    qualifications: PropTypes.object.isRequired,
    specialities: PropTypes.object.isRequired,
}
