import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import CrewCards from './CrewCards';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/card/style/index.less';

const Crew = ({crew}) => {
  return (
  <div className="crew">
    <h1 className="color-headline">Crew members</h1>
    <h3 className="color-headline">The Apollo 7 crew was commanded by Walter M. Schirra, Donn F. Eisele, R. Walter Cunningham.</h3>

    <Row className="m-t-sm m-b-sm" gutter={38}>
        {crew.map(astronaut =>
          <Col key={astronaut.id}  xs={{ span: 24}} sm={{ span: 12}} md={{ span: 6}}>
            <CrewCards key={astronaut.id} astronaut={astronaut}>{astronaut.name}</CrewCards>
          </Col>
        )}
    </Row>

  </div>
  );
};

Crew.propTypes = {
  crew: PropTypes.array.isRequired
};

export default Crew;
