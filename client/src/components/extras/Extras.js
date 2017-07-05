import React from 'react';
import { Layout } from 'antd';
import 'antd/lib/layout/style/index.less';
import 'antd/lib/menu/style/index.less';

const { Content, Sider } = Layout;
const Extras = () => {
  return (
    <div>
      <h1 className="mission color-headline">Extra Layout</h1>
      <h3 className="color-headline">Basic layouts utilizing Ant Design.</h3>
      <Layout className="layout--sidebar m-t-sm" style={{ padding: '0', background: '#ddd' }}>
        <Sider width={200} style={{ background: '#f1d075', padding: 24 }}>
          <h2>Sider</h2>
        </Sider>
        <Content>
            <div style={{ background: '#fff', padding: 24, minHeight: 500 }}>
              <h2>Content</h2>
            </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Extras;
