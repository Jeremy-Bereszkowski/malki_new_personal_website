import React from 'react'
import PropTypes from "prop-types"

import LeftRightPanels from "../../components/GridLayouts/LeftRightPanels";


/**
 * Professional Profile Section Component
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProfessionalProfile(props) {
    const {data, avatar} = props
    return (
        <LeftRightPanels
            leftPanelData={data}
            avatar={true}
            avatarImage={avatar}
        />
    )
}

ProfessionalProfile.propTypes = {
    data: PropTypes.object,
    avatar: PropTypes.string,
}
