import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ExitButton,
  FullscreenButton,
  FullscreenExitButton,
  Layout,
  MinimizedButton,
} from '../src/components';
import styles from './index.module.scss';
import { ApiOutlined, AppstoreAddOutlined } from '@ant-design/icons';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className={styles.dev}>
      <div>
        <ExitButton size={'small'} />
        <ExitButton size={'middle'} />
        <ExitButton size={'large'} />
        <FullscreenButton size={'small'} />
        <FullscreenButton size={'middle'} />
        <FullscreenButton size={'large'} />
        <FullscreenExitButton size={'small'} />
        <FullscreenExitButton size={'middle'} />
        <FullscreenExitButton size={'large'} />
        <MinimizedButton size={'small'} />
        <MinimizedButton size={'middle'} />
        <MinimizedButton size={'large'} />
        <MinimizedButton size={'large'} disabled />
      </div>
      <div>{/*<ResizeBorderExample />*/}</div>
      <div
        style={{
          backgroundColor: 'orange',
          height: '500px',
          width: '900px',
          border: '1px solid orange',
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
    </div>
  </StrictMode>,
);
