import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import 'antd/lib/layout/style/index.less';
import 'antd/lib/menu/style/index.less';

const { Content } = Layout;

class ErrorLayout extends Component {
  render() {
    return (
      <Layout className="layout--error bg-error-layout ">
        <Content style={{ padding: '20px 50px 20px', color: 'red' }}>
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

ErrorLayout.propTypes = {
  children: PropTypes.element
};

export default ErrorLayout;
