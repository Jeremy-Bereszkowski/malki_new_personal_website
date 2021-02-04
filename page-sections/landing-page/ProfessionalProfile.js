import React from 'react'
import classNames from "classnames"
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar";
import {Hidden} from "@material-ui/core";

import ThreeQuarterGrid from "components/GridLayouts/ThreeQuarterGrid";
import HeaderParaArray from "components/GridLayouts/HeaderParaArray";

import {sectionHeight} from "assets/jss/coreStyles";

const useStyles = makeStyles(theme => ({
    sectionHeight,
    margin: {
        margin: "2.5vh auto",
        maxWidth: "85%",
    },
    textMargin: {
        paddingRight: "60px",
    },
    large: {
        width: theme.spacing(28),
        height: theme.spacing(28),
        margin: "2.5vh auto 2.5vh auto",
    },
}))


/**
 * Professional Profile Section Component
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProfessionalProfile(props) {
    const {data, avatar} = props
    const classes = useStyles()

    const leftPanelContent = (
        <HeaderParaArray
            header={data.header}
            para={data.para}
            centerText={false}
            boldHeader={true}
        />
    )

    const leftPanel = (
        <>
            <Hidden only={['md', "lg", 'xl']}>
                <div>
                    {leftPanelContent}
                </div>
            </Hidden>
            <Hidden only={['xs', "sm"]}>
                <div className={classes.textMargin}>
                    {leftPanelContent}
                </div>
            </Hidden>
        </>
    )

    const rightPanel = (
        <Avatar
            src={avatar}
            className={classes.large}
        />
    )

    return (
        <ThreeQuarterGrid
            leftPanel={leftPanel}
            rightPanel={rightPanel}
            rootClassName={classNames(classes.sectionHeight, classes.margin)}
            alignCenter={true}
        />
    )
}

ProfessionalProfile.propTypes = {
    data: PropTypes.object,
    avatar: PropTypes.string,
}
