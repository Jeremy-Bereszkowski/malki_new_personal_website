import React from 'react'
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"

import {sectionHeight} from "assets/jss/coreStyles";

const useStyles = makeStyles(theme => ({
    root: {
        ...sectionHeight,
        margin: "2.5vh auto",
        maxWidth: "85%",
    },
    leftText: {
        textAlign: "start"
    },
    centerText: {
        textAlign: "center"
    },
}))

export default function HeaderBody(props) {
    const {header, para, centerText, list, boldHeader} = props
    const classes = useStyles()

    const textAlign = centerText ? classes.centerText : classes.leftText

    const paraArray = para.map((ele, key) => (
        <h4 key={key} className={textAlign}>
            {ele}
        </h4>
    ))

    const listArray = para.map((ele, key) => (
        <li key={key} className={textAlign}>
            {ele}
        </li>
    ))

    const paraRender = list ? listArray : paraArray

    const headerRender = boldHeader ? (
        <h3 className={textAlign}>
            <b>
                {header}
            </b>
        </h3>
    ) : (
        <h3 className={textAlign}>
            {header}
        </h3>
    )

    return (
        <>
            {headerRender}
            <br/>
            <br/>
            {paraRender}
        </>
    )
}

HeaderBody.defaultProp = {
    centerText: false,
    list: false,
    boldHeader: true,
}

HeaderBody.propTypes = {
    header: PropTypes.string.isRequired,
    para: PropTypes.array.isRequired,
    centerText: PropTypes.bool,
    list: PropTypes.bool,
    boldHeader: PropTypes.bool,
}

