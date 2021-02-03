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
        margin: "2.5vh 0",
        maxWidth: "85%",
    },
    container: {
        maxWidth: "85%",
    },
    large: {
        width: theme.spacing(28),
        height: theme.spacing(28),
        margin: "0 auto",
    }
}))

export default function ProfessionalProfile(props) {
    const {data, avatar} = props
    const classes = useStyles()

    const para = data.para.map((ele, key) => (
        <Grid item key={key}>
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
                    <Grid item>
                        <h3>
                            {data.header}
                        </h3>
                    </Grid>
                    <Grid item>
                        <br/>
                        <br/>
                    </Grid>
                    {para}
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
