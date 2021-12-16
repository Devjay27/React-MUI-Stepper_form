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
  btn: {
    marginTop: "20px",
  },
  bar: {
    height: "8%",
    textAlign: "center",
  },
});

const UserDetails = (props) => {
  const classes = useStyles();
  const cont = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const values = props.values;
  const handleFirst = props.handleFirst;
  const handleLast = props.handleLast;
  return (
    <Fragment>
      <AppBar className={classes.bar} position="fixed">
        <Typography variant="h6" className={classes.title}>
          Enter User Details
        </Typography>
      </AppBar>
      <form className={classes.form}>
        <TextField
          className={classes.text}
          label="First Name"
          //   variant="outlined"
          //   name="firstName"
          value={values.first}
          onChange={handleFirst}
        />
        <TextField
          className={classes.text}
          label="Last Name"
          //   variant="outlined"
          //   name="lastName"
          value={values.last}
          onChange={handleLast}
        />
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={cont}
        >
          Next
        </Button>
      </form>
    </Fragment>
  );
};

export default UserDetails;
