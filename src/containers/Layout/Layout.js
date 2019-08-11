import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import { Layout } from "antd";

const { Content } = Layout;

class LayoutComp extends React.Component {
  constructor(props) {
    super(props);

    this.toggleHandler = this.toggleHandler.bind(this);
  }

  state = {
    collapsed: true
  };

  toggleHandler() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Layout className="layout">
        <Slider collapsed={this.state.collapsed} />
        <Layout>
          <Header
            collapsed={this.state.collapsed}
            onToggle={this.toggleHandler}
          />
          <Content>
            <div
              style={{
                background: "#fff",
                padding: 24,
                minHeight: "calc(100vh - 133px)",
                boxSizing: "border-box"
              }}
            >
              {this.props.children}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default LayoutComp;
