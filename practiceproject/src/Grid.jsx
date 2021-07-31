import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Popularbooks from "./PopularBooks";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 30,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  fontname: {
    fontFamily: "Tahu",
  },
  fontname2: {
    fontFamily: "Hk",
  },
  text1: {
    marginTop: 100,
    marginLeft: 50,
  },
  getstarted: {
    backgroundColor: "#3CBFD4",
    color: "white",
    fontFamily: "Hk",
    "&:hover": {
      backgroundColor: "#33a1b2",
    },
  },
  appbar: {
    backgroundColor: "transparent",
  },
  maintoolbar: {
    marginLeft: 145,
  },
  toolbar: {
    color: "black",
    "&:hover": {
      backgroundColor: "white",
      color: "#33a1b2",
    },
  },
  toolbar2: {
    color: "black",
    "&:hover": {
      backgroundColor: "#85D7ED",
      color: "white",
    },
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundImage: `url("images/landingpage.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={classes.root}
    >
      <Grid container>
        <Grid item xs={6} md={6}>
          <AppBar elevation={0} className={classes.appbar}>
            <Toolbar className={classes.maintoolbar}>
              <Button className={classes.toolbar} color="inherit">
                Library
              </Button>
              <Button className={classes.toolbar} color="inherit">
                My Books
              </Button>
              <div style={{ flexGrow: 1 }}>
                <Button className={classes.toolbar} color="inherit">
                  Contact Us
                </Button>
              </div>
              <Button
                style={{ fontWeight: 400 }}
                className={classes.toolbar2}
                color="inherit"
              >
                Sign In
              </Button>
              <Button
                style={{ marginRight: 180 }}
                className={classes.toolbar2}
                color="inherit"
              >
                Sign Up
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid className={classes.text1} item xs={12} md={6}>
          <Typography variant="h2" className={classes.fontname}>
            Let The Knowlegde Sink <br></br> In Through Your Ears
          </Typography>
          <Typography
            style={{ marginTop: 22, fontSize: 22 }}
            paragraph
            component="div"
            className={classes.fontname2}
          >
            Experience the Best Audio Listening Platform With <br></br> "BOLTI
            KITAABAIN" and Enjoy Listening to Your <br></br> Favorite Books,
            "Anywhere Anytime".
          </Typography>
          <Typography
            style={{ fontSize: 18 }}
            paragraph
            component="div"
            className={classes.powered}
          >
            <i>Powered by PITB</i>
          </Typography>
          <Button className={classes.getstarted} variant="contained">
            Get Started
          </Button>
        </Grid>
      </Grid>

      <Popularbooks />
    </div>
  );
}
