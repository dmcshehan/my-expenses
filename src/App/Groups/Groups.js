import React from 'react'

//antd comps
import { Row, Col } from "antd";

//custom comps
import GroupList from '../GroupList/GroupList';
import GroupListDetails from '../GroupListDetails/GroupListDetails'

export default function Projects() {

    return (
        <Row>
            <Col span={10}>
                <GroupList />
            </Col>
            <Col span={14}>
                <GroupListDetails />
            </Col>
        </Row>
    )

}
