import React, { Fragment } from "react";
import {
  AppBar,
  Button,
  Typography,
  makeStyles,
  List,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    marginTop: "10px",
    flexGrow: 1,
  },
  form: {
    marginTop: "60px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  bar: {
    height: "8%",
    textAlign: "center",
  },
  btn: {
    marginTop: "20px",
  },
  btn1: {
    marginLeft: "10px",
    marginRight: "10px",
  },
});

const Confirm = (props) => {
  const classes = useStyles();
  const cont = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { first, last, occu, address, city } = props.values;

  return (
    <Fragment>
      <AppBar className={classes.bar} position="fixed">
        <Typography variant="h6" className={classes.title}>
          Confirm User Details
        </Typography>
      </AppBar>

      <div className={classes.form}>
        <List>
          <ListItemText primary="First Name" secondary={first} />
          <ListItemText primary="Last Name" secondary={last} />
          <ListItemText primary="Occupation" secondary={occu} />
          <ListItemText primary="Address" secondary={address} />
          <ListItemText primary="City" secondary={city} />
        </List>
        <div className={classes.btn}>
          <Button
            className={classes.btn1}
            variant="contained"
            color="secondary"
            onClick={back}
          >
            Back
          </Button>
          <Button
            className={classes.btn1}
            variant="contained"
            color="primary"
            onClick={cont}
          >
            Submit
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Confirm;
