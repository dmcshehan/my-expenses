import React from "react";
import { Redirect } from "react-router-dom";

//antd comps
import { Row, Col } from "antd";

//custom comps
import Layout from "../Layout/Layout";

//hooks
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

//custom comps
import Tile from "./Tile/Tile";

import links from "./links";

import { row } from "./Dashboard.module.css";

export default function Dashboard() {
  const isLoggedIn = useIsLoggedIn();

  function generateTiles() {
    return links.map((item, index) => (
      <Col span={4} key={index}>
        <Tile {...item} />
      </Col>
    ));
  }

  return isLoggedIn ? (
    <Layout>
      <Row className={row} gutter={[48, 48]}>
        {generateTiles()}
      </Row>
    </Layout>
  ) : (
    <Redirect to='/signin' />
  );
}
