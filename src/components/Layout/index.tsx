import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import classNames from 'classnames';
import { MenuInfo } from 'rc-menu/lib/interface';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { doraemonClassName } from '../../utils/internal';

import { MenuItemType } from 'antd/lib/menu/interface';
import './index.scss';
import { LayoutMenuItem } from './type';

export interface LayoutProps extends React.ComponentProps<any> {
  /**
   * @default 100%
   */
  height?: number | string;
  header?: React.ReactNode;
  headerWrapperClassName?: string;
  headerClassName?: string;
  brand?: React.ReactNode;
  brandClassName?: string;
  footer?: React.ReactNode;
  footerClassName?: string;
  /**
   * @description 通过在容器上加入 theme="dark" 属性来应用 :root 下的变量
   */
  dark?: boolean;
  onClick?: (keys: string[]) => void;
  /**
   * @default false
   */
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  /**
   *  默认展开的菜单项，不指定值则展开全部
   */
  defaultOpenKeys?: string[];
  selectedKeys?: string[];
  menu: LayoutMenuItem[];
  menuWrapperClassName?: string;
  menuClassName?: string;
  menuStyle?: React.CSSProperties;
  contentClassName?: string;
}

const Layout = ({
  children,
  className,
  height = '100%',
  style,
  defaultOpenKeys,
  selectedKeys,
  collapsed = false,
  onCollapsedChange,
  onClick: menuOnClick,
  menu = [],
  brand,
  brandClassName,
  header,
  footer,
  dark = false,
  menuStyle,
  menuClassName,
  menuWrapperClassName,
  contentClassName,
  headerClassName,
  headerWrapperClassName,
  footerClassName,
  ...rest
}: LayoutProps) => {
  const restProps = {
    ...rest,
    theme: dark ? 'dark' : 'light',
  };

  const [menuCollapsed, setMenuCollapsed] = useState<boolean>(collapsed);
  useEffect(() => {
    setMenuCollapsed(collapsed);
  }, [collapsed]);

  const menuDefaultOpenKeys = useMemo(() => {
    const openKeys: string[] = [];
    if (!defaultOpenKeys) {
      const getDefaultOpenKeys = (items: LayoutMenuItem[]): string[] => {
        if (!items || items.length === 0) return [];
        const keys: string[] = [];
        items.forEach((item) => {
          if (item.children && item.children.length > 0) {
            keys.push(item.key);
            getDefaultOpenKeys(item.children);
          }
        });
        return keys;
      };
      openKeys.push(...getDefaultOpenKeys(menu));
    } else {
      openKeys.push(...defaultOpenKeys);
    }
    return openKeys;
  }, [JSON.stringify(defaultOpenKeys)]);

  const menuItems = useMemo(() => {
    const generateItems = (items: LayoutMenuItem[]): MenuItemType[] | null => {
      if (!items || items.length === 0) return null;
      return (
        items?.map((item) => ({
          icon: item.icon,
          key: item.key,
          label: item.label,
          disabled: item.disabled,
          children: generateItems(item.children || []),
        })) || []
      );
    };
    return generateItems(menu);
  }, [menu]);

  const id = useMemo(() => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).slice(2);
    return 'doraemon-layout-' + timestamp + random;
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const [menuFullscreen, setMenuFullscreen] = useState<boolean>(true);

  useEffect(() => {
    const updateWidth = () => {
      if (ref.current) {
        setMenuFullscreen(ref.current.offsetWidth <= 768);
      }
    };

    // 初始时更新父元素宽度
    updateWidth();

    // 监听窗口变化来更新父元素宽度
    window.addEventListener('resize', updateWidth);

    // 清理事件监听器
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const handleMenuClick = ({ keyPath }: MenuInfo) => {
    menuOnClick && menuOnClick(keyPath);
    if (menuFullscreen) {
      onCollapsedChange && onCollapsedChange(true)
      setMenuCollapsed(true)
    }
  };

  return (
    <div
      {...restProps}
      style={{ height: height, ...style }}
      className={classNames(doraemonClassName('layout'), className)}
      ref={ref}
    >
      {
        <div
          className={classNames(doraemonClassName('layout-header-wrapper'), {
            headerWrapperClassName,
          })}
        >
          {brand && (
            <div
              className={classNames(
                doraemonClassName('layout-brand'),
                brandClassName,
              )}
            >
              {brand}
            </div>
          )}
          {header && (
            <div
              className={classNames(
                doraemonClassName('layout-header'),
                headerClassName,
              )}
            >
              {header}
            </div>
          )}
        </div>
      }
      <div className={doraemonClassName('layout-main')}>
        <div
          className={classNames(doraemonClassName('layout-menu-wrapper'), {
            [doraemonClassName('layout-menu-wrapper-collapsed')]: menuCollapsed,
            menuWrapperClassName,
          })}
          style={{
            width: menuFullscreen ? `${menuCollapsed ? '0' : '100%'}` : '',
          }}
        >
          <Menu
            getPopupContainer={(node) => ref?.current || document.body}
            theme={dark ? 'dark' : 'light'}
            className={classNames(
              doraemonClassName('layout-menu'),
              {
                [doraemonClassName('layout-menu-dark')]: dark,
              },
              menuClassName,
            )}
            style={{ flex: 1, ...menuStyle }}
            onClick={handleMenuClick}
            selectedKeys={selectedKeys}
            defaultOpenKeys={menuDefaultOpenKeys}
            inlineCollapsed={menuCollapsed}
            items={menuItems || []}
            mode={'inline'}
          />
          {!menuFullscreen && (
            <div
              className={classNames(
                doraemonClassName('layout-collapsed-trigger'),
              )}
              onClick={() => {
                onCollapsedChange && onCollapsedChange(!menuCollapsed)
                setMenuCollapsed(!menuCollapsed);
              }}
            >
              {menuCollapsed ? <RightOutlined /> : <LeftOutlined />}
            </div>
          )}
        </div>
        <div
          className={classNames(doraemonClassName('layout-content-wrapper'))}
        >
          <div
            className={classNames(
              doraemonClassName('layout-content'),
              contentClassName,
            )}
          >
            {children}
          </div>
          <div
            className={classNames(
              doraemonClassName('layout-footer'),
              footerClassName,
            )}
          >
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
