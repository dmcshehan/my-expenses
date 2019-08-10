import React from "react";
import { Form, Icon, Input, Button, Checkbox, Card, Row, Col } from "antd";

import styles from "./auth.module.scss";

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.switchForm = this.switchForm.bind(this);
  }
  state = {
    isLogin: true
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.form);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });

    const username = this.props.form.getFieldValue(["username"]);

    console.log(username);
  };

  switchForm() {
    this.setState({ isLogin: !this.state.isLogin });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row justify="center" align="middle">
        <Col sm={4} md={6} lg={6} offset={9}>
          <Card hoverable>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator("username", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: true
                })(<Checkbox>Remember me</Checkbox>)}
                {this.state.isLogin ? (
                  <Button
                    type="link"
                    className="login-form-forgot"
                    style={{ padding: 0 }}
                  >
                    Forgot password
                  </Button>
                ) : null}
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  {this.state.isLogin ? "Log in" : "Signup"}
                </Button>
                Or{" "}
                <Button
                  type="link"
                  style={{ padding: 0 }}
                  onClick={this.switchForm}
                >
                  {this.state.isLogin ? "register now!" : "signin!"}
                </Button>
              </Form.Item>
              {this.state.isLogin ? (
                <Form.Item>
                  <Button
                    block
                    className={`login-form-button ${styles.googleBtn} ${
                      styles.loginBtn
                    }`}
                    icon="google"
                  >
                    Login with Google
                  </Button>
                  <Button
                    block
                    className={`login-form-button ${styles.facebookBtn} ${
                      styles.loginBtn
                    }`}
                    icon="facebook"
                  >
                    Login with Facebook
                  </Button>
                </Form.Item>
              ) : null}
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Form.create({ name: "normal_login" })(NormalLoginForm);
