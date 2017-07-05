import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bowser from 'bowser';
import Img from 'react-image';
import appLogoURI__SVG from 'assets/images/react-apollo7-logo.svg';
import appLogoURI__PNG from 'assets/images/react-apollo7-logo.png';
import { Button, Checkbox, Form, Icon, Input } from 'antd';
import 'antd/lib/button/style/index.less';
import 'antd/lib/checkbox/style/index.less';
import 'antd/lib/form/style/index.less';
import 'antd/lib/input/style/index.less';
import 'antd/lib/icon/style/css';
import './Login.scss';

const createForm = Form.create;
const FormItem = Form.Item;
let appLogo = ( <span className="apollo7-logo--login transition-all transition-3-s" style={{backgroundImage:  `url(${appLogoURI__SVG})`}}></span> );
if (bowser.name === 'Safari') {appLogo = ( <Img className="strive-logo--fallback--login" src={appLogoURI__PNG}/> );}


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {credentials: {username: '', password: ''}};
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleSubmit = (event) => {
    event.preventDefault();
    this.props.form.validateFields((error, credentials) => {
      if (!error) {
        this.props.actions.loginUser({
          credentials: credentials,
          redirectUrl:this.props.location.query.redirect,
          origin: 'LoginPage'
        });
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <div className="login-content">
          <h2>{appLogo}</h2>
          <Form onSubmit={this._handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  form: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired
};

export default createForm()(Login);
