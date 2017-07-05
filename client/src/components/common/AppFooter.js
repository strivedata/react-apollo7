import React from 'react';
import { Layout } from 'antd';
import 'antd/lib/layout/style/index.less';
import 'antd/lib/menu/style/index.less';

const { Footer } = Layout;
const AppFooter = () => {
  return (
    <Footer className="app__footer">
      © {new Date().getFullYear()} | react-apollo7 | coded with &#9829; by <a href="//strive.agency">strive.agency</a>
    </Footer>
  );
};

export default AppFooter;
