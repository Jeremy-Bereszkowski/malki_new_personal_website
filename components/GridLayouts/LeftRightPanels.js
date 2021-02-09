import React from 'react'
import PropTypes from 'prop-types'
import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar";

import HeaderParaArray from "./HeaderParaArray";
import HiddenContainer from "./HiddenContainer";
import ThreeQuarterGrid from "./ThreeQuarterGrid";

import {sectionHeight} from "assets/jss/coreStyles";

const useStyles = makeStyles(theme => ({
    sectionHeight,
    margin: {
        margin: "2.5vh auto",
        maxWidth: "85%",
    },
    large: {
        width: theme.spacing(28),
        height: theme.spacing(28),
        margin: "2.5vh auto",
    },
}))

export default function LeftRightPanels(props) {
    const {leftPanelData, rightPanelData, avatarImage, avatar} = props
    const classes = useStyles()

    const leftPanelContent = (
        <HeaderParaArray
            header={leftPanelData.header}
            para={leftPanelData.para}
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

    const avatarRightPanel = (
        <Avatar
            src={avatarImage}
            className={classes.large}
        />
    )

    const contentRightPanel = rightPanelData !== undefined ? (
        <div>
            <HeaderParaArray
                header={rightPanelData.header}
                para={rightPanelData.para}
                centerText={false}
                boldHeader={false}
                list={true}
            />
        </div>
    ) : null

    const rightPanel = avatar !== undefined ? avatarRightPanel : contentRightPanel

    return (
        <ThreeQuarterGrid
            leftPanel={leftPanel}
            rightPanel={rightPanel}
            rootClassName={classNames(classes.sectionHeight, classes.margin)}
        />
    )
}

LeftRightPanels .propTypes = {
    avatar: false,
}

LeftRightPanels .propTypes = {
    leftPanelData: PropTypes.object.isRequired,
    rightPanelData: PropTypes.object,
    avatar: PropTypes.bool,
    avatarImage: PropTypes.string,
}
