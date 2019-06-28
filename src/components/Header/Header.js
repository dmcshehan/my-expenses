import React from "react";
import PropTypes from "prop-types";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//React router
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

//redux
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators/index";

//material
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

//Meterial UI styles
import { withStyles } from "@material-ui/core/styles";

// Material Icons
import PersonIcon from "@material-ui/icons/Person";
import LogOutIcon from "@material-ui/icons/PowerSettingsNew";

//custom Componenets
import Aux from "../../hoc/Aux/Aux";
import SideDrawer from "../SideDrawer/SideDrawer";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  menuIcon: {
    color: "white"
  },
  title: {
    flexGrow: 1,
    color: "white"
  },
  appBar: {
    padding: theme.spacing(1)
  },
  grow: {
    flexGrow: 1,
    textAlign: "left"
  },
  linkBtn: {
    textDecoration: "none",
    color: "white"
  },
  btn: {
    color: "white"
  },
  avatar: {
    width: 32,
    height: 32
  },
  popper: {}
});

class MenuAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
      drawerOpen: false
    };

    this.onLogout = this.onLogout.bind(this);
    this.profileIconClickHandler = this.profileIconClickHandler.bind(this);
    this.onLinkClick = this.onLinkClick.bind(this);
    this.onMenuIconClickHandler = this.onMenuIconClickHandler.bind(this);
  }

  componentDidMount() {
    // console.log("componentDidMount[Header.js]", this.props.isAuthenticated);
  }

  onLogout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.onLogout();
      });
  }

  profileIconClickHandler(e) {
    this.setState({
      ...this.state,
      open: !this.state.open,
      anchorEl: e.currentTarget
    });
  }

  onMenuIconClickHandler() {
    this.setState({
      ...this.state,
      drawerOpen: !this.state.drawerOpen
    });
  }

  onLinkClick() {
    this.setState({
      ...this.state,
      open: false
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => {
                this.onMenuIconClickHandler();
              }}
            >
              <MenuIcon className={classes.menuIcon} />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              My Expenses
            </Typography>
            {this.props.isAuthenticated ? (
              <Aux>
                <IconButton
                  aria-haspopup="true"
                  color="inherit"
                  onClick={e => this.profileIconClickHandler(e)}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={this.props.authUser.photoURL}
                    className={classes.avatar}
                  />
                </IconButton>

                <Popper open={this.state.open} anchorEl={this.state.anchorEl}>
                  <Paper className={classes.popper}>
                    <List
                      component="nav"
                      aria-labelledby="nested-list-subheader"
                      className={classes.root}
                    >
                      <Link
                        component={RouterLink}
                        to="/profile"
                        onClick={() => this.onLinkClick()}
                      >
                        <ListItem button>
                          <ListItemIcon>
                            <PersonIcon />
                          </ListItemIcon>
                          <ListItemText primary="Profile" />
                        </ListItem>
                      </Link>
                      <Link
                        component={RouterLink}
                        to="/profile"
                        onClick={this.onLogout}
                      >
                        <ListItem button>
                          <ListItemIcon>
                            <LogOutIcon />
                          </ListItemIcon>
                          <ListItemText primary="Logout" />
                        </ListItem>
                      </Link>
                    </List>
                  </Paper>
                </Popper>
              </Aux>
            ) : (
              <RouterLink to="/login" className={classes.linkBtn}>
                <Button color="inherit">Login</Button>
              </RouterLink>
            )}
          </Toolbar>
          <SideDrawer
            open={this.state.drawerOpen}
            drawerClose={() => this.onMenuIconClickHandler()}
          />
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    authUser: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actionCreators.logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MenuAppBar));
