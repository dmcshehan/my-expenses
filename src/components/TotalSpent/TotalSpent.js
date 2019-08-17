import React from "react";

//redux
import { connect } from "react-redux";

//antd
import { Typography, Card } from "antd";

const { Text, Title } = Typography;

class TotalSpent extends React.Component {
  render() {
    const { totalSpent } = this.props;
    return (
      <Card>
        <Title level={3}>Total Spent</Title>
        <Title level={4} style={{ marginTop: 10 }}>
          {totalSpent ? totalSpent : 0}
        </Title>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalSpent: state.expense.totalSpent
  };
};

export default connect(mapStateToProps)(TotalSpent);
