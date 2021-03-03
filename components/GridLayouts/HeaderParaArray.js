import React from 'react'
import PropTypes from "prop-types"
import classNames from "classnames"

import { makeStyles } from "@material-ui/core/styles"

import { extraSmall2Font } from "assets/jss/coreStyles";

const useStyles = makeStyles({
    leftText: {
        textAlign: "start"
    },
    centerText: {
        textAlign: "center"
    },
    listRoot: {
        listStylePosition: 'outside'
    },
    font: {
        fontWeight: "400",
    },
    listFont: {
        ...extraSmall2Font,
    }

})

export default function HeaderParaArray(props) {
    const {header, para, centerText, list, boldHeader} = props
    const classes = useStyles()

    const textAlign = centerText ? classes.centerText : classes.leftText

    const paraArray = para.map((ele, key) => (
        <h4 key={key} className={classNames(textAlign, classes.font)}>
            {ele}
        </h4>
    ))
    const listArray = para.map((ele, key) => (
        <li key={key} className={classNames(textAlign, classes.font, classes.listFont)}>
            {ele}
        </li>
    ))
    const paraRender = list ? (
        <ul className={classes.listRoot}>
            {listArray}
        </ul>
    ) : paraArray

    const headerRender = boldHeader ? (
        <h3 className={textAlign}>
            <b>
                {header}
            </b>
        </h3>
    ) : (
        <h3 className={classNames(textAlign, classes.font)}>
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

HeaderParaArray.defaultProp = {
    centerText: false,
    list: false,
    boldHeader: true,
}

HeaderParaArray.propTypes = {
    header: PropTypes.string.isRequired,
    para: PropTypes.array.isRequired,
    centerText: PropTypes.bool,
    list: PropTypes.bool,
    boldHeader: PropTypes.bool,
}

