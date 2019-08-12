import React from "react";
import styles from "./header.module.scss";
import PropTypes from "prop-types";

//redux
import { connect } from "react-redux";
import { logoutAction } from "../../store/actionCreators/auth";

import { Layout, Icon } from "antd";

const { Header } = Layout;

class MenuAppBar extends React.Component {
  render() {
    const { collapsed, onToggle } = this.props;

    return (
      <Header style={{ background: "#fff", padding: 0 }}>
        <Icon
          className={styles.trigger}
          type={collapsed ? "menu-unfold" : "menu-fold"}
          onClick={onToggle}
        />
      </Header>
    );
  }
}

MenuAppBar.propTypes = {
  onLogout: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    authedUser: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logoutAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuAppBar);
