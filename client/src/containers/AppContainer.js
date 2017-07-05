import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from 'actions/sessionActions';

class AppContainer extends Component {

  render() {
    return this.props.children;
  }
}

AppContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.element
};

const mapDispatchToProps = (dispatch) => {return { actions: bindActionCreators(sessionActions, dispatch)};};
export default connect(null, mapDispatchToProps)(AppContainer);

