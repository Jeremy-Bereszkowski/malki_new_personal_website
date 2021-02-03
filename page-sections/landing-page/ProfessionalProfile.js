import React from 'react'
import classNames from "classnames"
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import {sectionHeight} from "assets/jss/coreStyles";

const useStyles = makeStyles(theme => ({
    sectionHeight,
    margin: {
        margin: "2.5vh 0"
    },
    container: {
        maxWidth: "85%",
    },
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: "0 auto",
    }
}))

export default function ProfessionalProfile(props) {
    const {data, avatar} = props
    const classes = useStyles()

    const para = data.para.map((ele, key) => (
        <Grid item key={key} className={classes.container}>
            <h5>
                {ele}
            </h5>
        </Grid>
    ))

    return (
        <Grid
            container
            direction={"row"}
            justify={"center"}
            alignItems={"center"}
            alignContent={"center"}
            className={classNames(classes.sectionHeight, classes.margin)}
        >
            <Grid item md={8}>
                    <Grid
                        container
                        direction={"column"}
                        justify={"center"}
                        alignItems={"flex-start"}
                        alignContent={"center"}
                        style={{paddingRight: "60px"}}
                    >
                        <Grid item className={classes.container}>
                            <h3>
                                {data.header}
                            </h3>
                        </Grid>
                        <Grid item className={classes.container}>
                            <h4>
                                {data.subHeader}
                            </h4>
                        </Grid>
                        <Grid item className={classes.container}>
                            <br/>
                            <br/>
                        </Grid>
                        {para}
                        <Grid item>
                            <br/>
                            <br/>
                        </Grid>
                    </Grid>
            </Grid>
            <Grid item>
                    <Avatar
                        src={avatar}
                        className={classes.large}
                    />
            </Grid>
        </Grid>
    )
}

ProfessionalProfile.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    data: PropTypes.object,
    avatar: PropTypes.string,
}
