import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'utils/isEmpty';
import * as sessionActions from 'actions/sessionActions';
import * as routeActions from 'actions/routeActions';
import AppHeader from 'components/common/AppHeader';

class HeaderContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    if (isEmpty(this.props.user)) {
      this.props.actions.fetchAuthUserProfile();
    }
  }

  render() {
    const {user, activePath} = this.props;

    return (
      <AppHeader user={user} activePath={activePath} logoutUser={this.props.actions.logoutUser} navigateTo={this.props.routeActions.navigateTo} />
    );
  }
}

HeaderContainer.propTypes = {
  activePath: PropTypes.string.isRequired,
  user: PropTypes.object,
  actions: PropTypes.object,
  routeActions: PropTypes.object
};

const mapStateToProps = (state) => { return { user: state.user};};
const mapDispatchToProps = (dispatch) => {return {
    actions: bindActionCreators(sessionActions, dispatch),
    routeActions: bindActionCreators(routeActions, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
