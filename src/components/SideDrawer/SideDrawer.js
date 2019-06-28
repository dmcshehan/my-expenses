import React, { Component } from "react";

//router
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import { withStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

const styles = () => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    justifyContent: "flex-end"
  }
});

class SideDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <Drawer variant="persistent" anchor="left" open={this.props.open}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.props.drawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <Link
            component={RouterLink}
            to="/dashboard"
            onClick={this.props.drawerClose}
          >
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(SideDrawer);
