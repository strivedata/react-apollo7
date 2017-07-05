import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as crewActions from 'actions/crewActions';
import Crew from 'components/crew/Crew';

class CrewContainer extends Component {
    constructor(props, context) {
      super(props, context);
    }

    componentDidMount() {
      this.props.crew.length < 1 && this.props.actions.fetchCrewMembers('CrewContainer');
    }

    render() {
      const {crew} = this.props;
      return (
          <Crew crew={crew} />
        );
    }
}

CrewContainer.propTypes = {
  crew: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {return { crew: state.crew};};
const mapDispatchToProps = (dispatch) => {return { actions: bindActionCreators(crewActions, dispatch)};};
export default connect(mapStateToProps, mapDispatchToProps)(CrewContainer);
