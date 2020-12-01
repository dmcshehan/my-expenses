import React from "react";
import { Layout } from "antd";
import { Redirect } from "react-router-dom";

import Header from '../Header/Header'

import useIsLoggedIn from '../../hooks/useIsLoggedIn'

export default function LayoutComp({ children }) {


  const isLoggedIn = useIsLoggedIn();


  return isLoggedIn ?
    <Layout className="layout">
      <Header />
      <div style={{ height: 'calc(100vh - 64px)' }}>{children}</div>
    </Layout>
    : <Redirect to='/signin' />;
}
