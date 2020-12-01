import React from "react";

//antd comps
import { Row, Col } from "antd";

//custom comps
import Tile from "./Tile/Tile";
import links from "./links";

import { row } from "./Dashboard.module.css";

export default function Dashboard() {

  function generateTiles() {
    return links.map((item, index) => (
      <Col span={4} key={index}>
        <Tile {...item} />
      </Col>
    ));
  }

  return (
    <Row className={row} gutter={[48, 48]}>
      {generateTiles()}
    </Row>
  )
}
