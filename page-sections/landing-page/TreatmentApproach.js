import React from 'react'
import PropTypes from "prop-types"

import LeftRightPanels from "components/GridLayouts/LeftRightPanels";


/**
 * TreatmentApproach Page Section Component
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function TreatmentApproach(props) {
    const {treatmentApproach, languages} = props
    return (
        <LeftRightPanels
            leftPanelData={treatmentApproach}
            rightPanelData={languages}
        />
    )
}

TreatmentApproach.propTypes = {
    treatmentApproach: PropTypes.object.isRequired,
    languages: PropTypes.object.isRequired,
}
