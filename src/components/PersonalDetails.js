import React, { Fragment } from "react";
import {
  AppBar,
  TextField,
  Button,
  Typography,
  makeStyles,
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

const PersonalDetails = (props) => {
  const classes = useStyles();
  const cont = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const values = props.values;
  const handleOccu = props.handleOccu;
  const handleAddress = props.handleAddress;
  const handleCity = props.handleCity;
  return (
    <Fragment>
      <AppBar className={classes.bar} position="fixed">
        <Typography variant="h6" className={classes.title}>
          Enter Personal Details
        </Typography>
      </AppBar>
      <form className={classes.form}>
        <TextField
          className={classes.text}
          label="Occupation"
          //   variant="outlined"
          //   name="occu"
          value={values.occu}
          onChange={handleOccu}
        />
        <TextField
          className={classes.text}
          label="Address"
          //   variant="outlined"
          //   name="address"
          value={values.address}
          onChange={handleAddress}
        />
        <TextField
          className={classes.text}
          label="City"
          //   variant="outlined"
          //   name="city"
          value={values.city}
          onChange={handleCity}
        />
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
            Next
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

export default PersonalDetails;
