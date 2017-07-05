import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import styled from 'styled-components';
import Img from 'react-image';

const CrewTag = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? '#8e78b9' : 'white'};
  color: ${props => props.primary ? 'white' : '#8e78b9'};
  font-size: 0.7em;
  margin: 1rem;
  padding: 0.25em 1em;
  border: 2px solid #8e78b9;
  border-radius: 3px;
  float: none;
`;

const SpaceTime = styled.p`
  /* Adapt the colours based on primary prop */
  color: ${props => props.primary ? 'white' : '#8e78b9'};
  font-size: 1.2em;
  margin: 0 0 0.5rem;
  padding: 0 1rem 1rem ;
`;


const CrewCards = ({astronaut}) => {
  return (
    <Card className="m-t-sm m-b-sm pointer no-padding" title={astronaut.name} bordered={false}>

      <Img src={astronaut.image} style={{width: '100%', height: 'auto'}}/>
      <CrewTag primary>{astronaut.position}</CrewTag>
      <SpaceTime>Spacetime: {astronaut.space_time}</SpaceTime>
    </Card>
  );
};

CrewCards.propTypes = {
  astronaut: PropTypes.object.isRequired
};

export default CrewCards;
