import React from 'react';
import { Row, Steps } from 'antd';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/card/style/index.less';
import 'antd/lib/steps/style/index.less';

const Step = Steps.Step;

const Mission = () => {
  return (
    <div>
      <h1 className="mission color-headline">Mission</h1>
      <h3 className="color-headline">Apollo 7 was the first mission in the United States' Apollo program to carry a crew into space.</h3>

        <Row className="mission-stages m-t-sm m-b-sm bg-white p-a-lg" gutter={38}>

        <Steps current={4}>
          <Step title="Liftoff" description="Launch into space" />
          <Step title="Spaceflight" description="Dance with the Stars" />
          <Step title="Reentry" description="Splash down into the atlantic" />
          <Step title="Recovery" description="Celebrate aboard the USS Essex" />
          <Step title="Accomplishment" description="Enjoy life on earth" />
        </Steps>

      </Row>
    </div>
  );
};

export default Mission;
