import React from 'react'
import classNames from "classnames"
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar";

import {sectionHeight} from "assets/jss/coreStyles";
import ThreeQuarterGrid from "../../components/GridLayouts/ThreeQuarterGrid";

const useStyles = makeStyles(theme => ({
    sectionHeight,
    margin: {
        margin: "2.5vh auto",
        maxWidth: "85%",
    },
    container: {
        maxWidth: "80%",
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
 * Professional Profile Page Section Component
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProfessionalProfile(props) {
    const {data, avatar} = props
    const classes = useStyles()

    const para = data.para.map((ele, key) => (
        <h5 key={key}>
            {ele}
        </h5>
    ))

    const leftPanel = (
        <div className={classes.textMargin}>
            <h3>
                {data.header}
            </h3>
            <br/>
            <br/>
            {para}
        </div>
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
