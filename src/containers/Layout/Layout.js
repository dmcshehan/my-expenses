import React from "react";
import Header from "../../components/Header/Header";

const Layout = (props) => {
  return (
    <div>
      <Header isAuthenticated={props.auth} />
      {props.children}
    </div>
  );
};

export default Layout;
