import React from 'react'
import classNames from "classnames"
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"

import ThreeQuarterGrid from "components/GridLayouts/ThreeQuarterGrid";
import HeaderParaArray from "components/GridLayouts/HeaderParaArray";
import HiddenContainer from "components/GridLayouts/HiddenContainer";

import {sectionHeight} from "assets/jss/coreStyles";

const useStyles = makeStyles({
    sectionHeight,
    margin: {
        margin: "2.5vh auto",
        maxWidth: "85%",
    },
})


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

    const leftPanelContent = (
        <HeaderParaArray
            header={qualifications.header}
            para={qualifications.para}
            centerText={false}
            boldHeader={true}
        />
    )

    const leftPanel = (
        <HiddenContainer
            smallPanel={leftPanelContent}
            largePanel={leftPanelContent}
            dynamicSized={true}
        />
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
