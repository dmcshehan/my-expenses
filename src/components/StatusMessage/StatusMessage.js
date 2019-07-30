import React from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    position: "absolute",
    bottom: 30
  },
  success: {
    backgroundColor: "green"
  },
  error: {
    backgroundColor: "red"
  },
  warning: {
    backgroundColor: "orange"
  }
}));

const StatusMessage = props => {
  const classes = useStyles();
  return (
    <SnackbarContent
      className={clsx(
        props.message.type === "error" ? classes.error : classes.success,
        classes.root
      )}
      style={{
        position: "absolute",
        bottom: 20
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={props.open}
      autoHideDuration={6000}
      ContentProps={{
        "aria-describedby": "message-id"
      }}
      message={<span id="message-id">{props.message.text}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={props.close}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
};

export default StatusMessage;
