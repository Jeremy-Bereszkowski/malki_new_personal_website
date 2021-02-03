import React from "react";
import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import {grayColor, whiteColor} from "assets/jss/nextjs-material-kit-pro";
import FooterData from "assets/data/components/footer";

const useStyles = makeStyles({
    footerWidth: {
        maxWidth: "90%",
        margin: "0 auto",
    },
    footer: {
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingRight: "25px",
        paddingLeft: "25px",
        width: "100%",
        "& h4, & h5": {
            color: whiteColor,
            textDecoration: "none"
        },
        position: "absolute",
        zIndex: "8"
    },
    footerBrand: {
        color: "white",
        margin: "0",
    },
    dark: {
        background:
            "radial-gradient(ellipse at center," +
            grayColor[4] +
            " 0," +
            grayColor[5] +
            " 100%)",
        backgroundSize: "550% 450%",
        color: whiteColor,
        "& i": {
            color: whiteColor
        },
        "& a, & h3, & h5": {
            opacity: ".86",
            "&:visited": {
                color: whiteColor
            },
            "&:focus, &:hover": {
                opacity: 1
            }
        },
    }
});

export default function Footer() {
    const classes = useStyles();
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes["dark"]]: true,
    });

    return (
        <footer className={footerClasses}>
            <Grid
                container
                spacing={3}
                direction={"row"}
                justify={"space-between"}
                alignContent={"center"}
                alignItems={"center"}
                className={classes.footerWidth}
            >
                <Grid item xs={12} md={3}>
                    <Grid
                        container
                        direction={"column"}
                        justify={"flex-start"}
                        alignItems={"flex-start"}
                    >
                        <Grid item>
                            <h3 className={classes.footerBrand}>
                                {FooterData.left.header}
                            </h3>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Grid
                        container
                        direction={"column"}
                        justify={"flex-end"}
                        alignItems={"flex-end"}
                    >
                        <Grid item>
                            <a href={"mailto:"+FooterData.right.email}>
                                <h4 className={classes.footerBrand}>
                                    {FooterData.right.email}
                                </h4>
                            </a>
                        </Grid>
                        <Grid item>
                            <a href={"tel:"+FooterData.right.phone}>
                                <h4 className={classes.footerBrand}>
                                    {FooterData.right.phone}
                                </h4>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}
