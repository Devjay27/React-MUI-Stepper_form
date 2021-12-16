import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  con: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginTop: "30px",
  },
});

const Success = () => {
  const classes = useStyles();
  return (
    <div className={classes.con}>
      {/* <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5">Success!</Typography>
        </CardContent>
      </Card> */}
      <Typography variant="h4">Success!</Typography>
      <Typography variant="h6">
        Your response is successfully recorded.
      </Typography>
    </div>
  );
};

export default Success;
