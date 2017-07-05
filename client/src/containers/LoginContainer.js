import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from 'actions/sessionActions';
import Login from 'components/login/Login';

class LoginContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {location, actions} = this.props;

    return (
      <Login actions={actions} location={location} loginUser={this.props.actions.loginUser} />
    );
  }
}

LoginContainer.propTypes = {
  actions: PropTypes.object,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {return {
  userIsLoggingIn: state.session.userIsLoggingIn,
  userLoginFailed: state.session.userLoginFailed};
};
const mapDispatchToProps = (dispatch) => {return { actions: bindActionCreators(sessionActions, dispatch)};};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
