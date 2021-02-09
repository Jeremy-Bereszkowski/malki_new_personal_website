import React from 'react'
import PropTypes from "prop-types"

import LeftRightPanels from "components/GridLayouts/LeftRightPanels";


/**
 * Qualifications Page Section Component
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Qualifications(props) {
    const {qualifications, specialities} = props
    return (
        <LeftRightPanels
            leftPanelData={qualifications}
            rightPanelData={specialities}
        />
    )
}

Qualifications.propTypes = {
    qualifications: PropTypes.object.isRequired,
    specialities: PropTypes.object.isRequired,
}
