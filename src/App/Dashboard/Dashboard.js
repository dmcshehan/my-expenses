import React from "react";
import { Redirect } from "react-router-dom";

import Layout from "../Layout/Layout";

//hooks
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

export default function Dashboard() {
  const isLoggedIn = useIsLoggedIn();

  return isLoggedIn ? (
    <Layout>
      <div>Dashboard</div>
    </Layout>
  ) : (
    <Redirect to='/signin' />
  );
}
