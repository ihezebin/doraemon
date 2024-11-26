import React from 'react';
import { ApiOutlined, AppstoreAddOutlined } from '@ant-design/icons';
// @ts-ignore
import { Layout } from '@hezebin/doraemon';

const LayoutExample = () => {
  return (
    <div
      style={{
        height: '500px',
        width: '100%',
      }}
    >
      <Layout
        menu={[
          { icon: <ApiOutlined />, key: 'api', label: 'API' },
          {
            icon: <AppstoreAddOutlined />,
            key: 'component',
            label: '组件',
            children: [
              { key: 'test', label: 'Test' },
              { key: 'captcha_input', label: 'CaptchaInput 验证码' },
              { key: 'icon', label: 'Icon 图标' },
              { key: 'layout', label: 'Layout 布局' },
            ],
          },
          {
            icon: <AppstoreAddOutlined />,
            key: 'layout_test_menu_item',
            label: 'layout_test_menu_item',
            children: [
              {
                key: 'layout_test_menu_item1',
                label: 'layout_test_menu_item1',
                disabled: true,
              },
              {
                key: 'layout_test_menu_item2',
                label: 'layout_test_menu_item2',
              },
              {
                key: 'layout_test_menu_item3',
                label: 'layout_test_menu_item3',
                disabled: true,
              },
              {
                key: 'layout_test_menu_item4',
                label: 'layout_test_menu_item4',
              },
            ],
          },
        ]}
        brand={'brand'}
        header={'header'}
        footer={'footer'}
      >
        <h1>11</h1>
        <h1>11</h1>
        <h1>11</h1>
        <h1>11</h1>
        <h1>11</h1>
        <h1>11</h1>
        <h1>11</h1>
        <h1>11</h1>
        <h1>11</h1>
        <h1>11</h1>
        <h1>11</h1>
        <h1>11</h1>
      </Layout>
    </div>
  );
};

export default LayoutExample;
