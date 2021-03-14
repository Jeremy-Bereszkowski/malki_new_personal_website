import React from "react";

import { Grid, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

import { HeaderData } from "assets/data/components/header";
import Colours from "assets/strings/colours";

import Button from "components/Buttons/Button";
import useIsTouchDevice from "../../util/device-detect";

const useStyles = makeStyles({
  appBar: {
    margin: "25px",
    backgroundColor: "transparent !important",
    boxShadow: "none",
  }
});

const CustomTooltip = withStyles({
  tooltip: {
    backgroundColor: Colours.white,
    color: Colours.dark,
    fontSize: 13,
  },
})(Tooltip);

export default function Header() {
  const classes = useStyles();

  return (
      <AppBar className={classes.appBar}>
        <Grid
            container
            direction={"row"}
            justify={"flex-end"}
            alignItems={"center"}
        >
          <Grid item>
            <Grid
                container
                direction={"row"}
                justify={"center"}
                alignContent={"center"}
                alignItems={"center"}
            >
              {HeaderData.map((ele, key) => {
                const href = ele.mobileOnClick ? (useIsTouchDevice() ? ele.href : null) : ele.href
                return (
                    <Grid item key={key}>
                      <CustomTooltip title={ele.tip}>
                        <Button
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          {ele.icon}
                        </Button>
                      </CustomTooltip>
                    </Grid>
                  )}
              )}
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
  );
}
