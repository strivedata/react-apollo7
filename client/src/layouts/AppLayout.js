import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import 'antd/lib/layout/style/index.less';
import 'antd/lib/menu/style/index.less';
import HeaderContainer from 'containers/HeaderContainer';
import AppFooter from 'components/common/AppFooter';

const { Content } = Layout;

class AppLayout extends Component {

  render() {
    return (
    <Layout className="layout--app bg-app-layout">
      <HeaderContainer activePath={this.props.location.pathname}/>
      <div className="app__main">
          <Content className="app__main__content">
            {this.props.children}
          </Content>
      </div>
      <AppFooter/>
    </Layout>
    );
  }
}

AppLayout.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object
};

export default AppLayout;
