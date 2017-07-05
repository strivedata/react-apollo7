import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Layout, Menu, Icon, Dropdown, Row, Col, Popover } from 'antd';
import 'antd/lib/layout/style/index.less';
import 'antd/lib/menu/style/index.less';
import 'antd/lib/popover/style/index.less';
import 'antd/lib/icon/style/css';
import 'antd/lib/dropdown/style/index.less';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import appLogoURI__SVG from 'assets/images/react-apollo7-logo.svg';
import appLogoURI__PNG from 'assets/images/react-apollo7-logo.png';
import Img from 'react-image';
import bowser from 'bowser';

const { Header } = Layout;

class AppHeader extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { activePath, logoutUser, navigateTo, user } = this.props;
    let appLogo = ( <Link to="/" className="apollo7-logo transition-all transition-3-s" style={{backgroundImage:  `url(${appLogoURI__SVG})`}}/> );
    if (bowser.name === 'Safari') {appLogo = ( <Img className="strive-logo--fallback" src={appLogoURI__PNG}/> );}

    const dropdownOptions = (
      <Menu>
        <Menu.Item className="app__header__menu__dropdown__option"><Link to="/error">Error Page</Link></Menu.Item>
        <Menu.Item className="app__header__menu__dropdown__option"><Link to="/extras">Extra Layout</Link></Menu.Item>
        <Menu.Item className="app__header__menu__dropdown__option"><div onClick={logoutUser}>Logout</div></Menu.Item>
      </Menu>
    );
    const mobileMenu = (
      <Menu
        onClick={this.handleClick}
        style={{ width: 240 }}
        defaultSelectedKeys={[activePath]}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item className="app__header__menu__item--mobile center" key="/">
              <div className="app__header__menu__item--mobile__link" onClick={() => navigateTo({route: '/', delay:2000})}>Crew</div></Menu.Item>
        <Menu.Item className="app__header__menu__item--mobile center" key="/mission">
              <div className="app__header__menu__item--mobile__link" onClick={() => navigateTo({route: '/mission', delay:2000})}>Mission</div></Menu.Item>
        <Menu.Item className="app__header__menu__item--mobile center" key="/extras">
              <div className="app__header__menu__item--mobile__link" onClick={() => navigateTo({route: '/extras', delay:2000})}>Extras</div></Menu.Item>
        <Menu.Item className="app__header__menu__item--mobile center" key="/error">
              <div className="app__header__menu__item--mobile__link" onClick={() => navigateTo({route: '/error', delay:2000})}>Error</div></Menu.Item>
        <Menu.Item className="app__header__menu__item--mobile center">
              <div className="app__header__menu__item--mobile__link" onClick={logoutUser}>Logout</div></Menu.Item>
      </Menu>
    );

    return (
        <Header className="app__header bg-white clearfix">
          <div  className="app__header__mobile" >
            <Popover placement="bottomLeft" content={mobileMenu} trigger="click">
              <i className="anticon anticon-menu nav-phone-icon"></i>
            </Popover>
          </div>

          <Row gutter={38} style={{maxWidth: '80rem', margin: '0 auto'}}>
            <Col xs={{ span: 24}} sm={{ span: 24}} md={{ span: 2}} lg={{ span: 2}} style={{ paddingLeft: '0'}}>
              {appLogo}
            </Col>

            <Col xs={{ span: 0}} sm={{ span: 0}} md={{ span: 17}} lg={{ span: 17}}>
              <Menu
                className="app__header__menu transition-all transition-3-s"
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={[activePath]}
              >
                <Menu.Item className="app__header__menu__item" key="/"><Link to="/">Crew</Link></Menu.Item>
                <Menu.Item className="app__header__menu__item" key="/crew"><Link to="/mission">Mission</Link></Menu.Item>
              </Menu>
            </Col>

            <Col xs={{ span: 0}} sm={{ span: 0}} md={{ span: 5}} lg={{ span: 5}}>
              <Dropdown className="app__header__menu__dropdown" overlay={dropdownOptions}>
                  <span className="ant-dropdown-link app__header__menu__dropdown__trigger" href="#">
                     {user.email}<Icon type="down" />
                  </span>
              </Dropdown>
            </Col>
          </Row>
        </Header>
    );
  }
}

AppHeader.propTypes = {
  user: PropTypes.object,
  activePath: PropTypes.string.isRequired,
  logoutUser: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired
};

export default AppHeader;
