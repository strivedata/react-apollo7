import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import 'antd/lib/layout/style/index.less';
import 'antd/lib/menu/style/index.less';
import AppFooter from 'components/common/AppFooter';

const { Content } = Layout;

class PublicLayout extends Component {
  render() {
    return (
      <Layout className="layout--public bg-public-layout">
        <Content>
          {this.props.children}
        </Content>
        <AppFooter/>
      </Layout>
    );
  }
}

PublicLayout.propTypes = {
  children: PropTypes.element
};

export default PublicLayout;
