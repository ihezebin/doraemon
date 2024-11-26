import {
  CloseCircleFilled,
  FullscreenExitOutlined,
  FullscreenOutlined,
  MinusCircleFilled,
} from '@ant-design/icons';
import classNames from 'classnames';
import React, { ComponentProps } from 'react';

import { Button } from 'antd';
import { doraemonClassName } from '../../utils/internal';
import './index.scss';

interface ButtonProps extends ComponentProps<any> {
  /**
   * @default middle
   */
  size?: 'small' | 'middle' | 'large';
  disabled?: boolean;
}

export const ExitButton = ({
  size = 'middle',
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <Button
      disabled={disabled}
      size={size}
      type={'text'}
      className={classNames(doraemonClassName('exit-button'), className)}
      icon={<CloseCircleFilled />}
      {...props}
    />
  );
};

export const FullscreenButton = ({
  size,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <Button
      disabled={disabled}
      size={size}
      type={'text'}
      className={classNames(doraemonClassName('fullscreen-button'), className)}
      icon={<FullscreenOutlined />}
      {...props}
    />
  );
};
export const FullscreenExitButton = ({
  size,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <Button
      disabled={disabled}
      size={size}
      type={'text'}
      className={classNames(
        doraemonClassName('fullscreen-exit-button'),
        className,
      )}
      icon={<FullscreenExitOutlined />}
      {...props}
    />
  );
};

export const MinimizedButton = ({
  size,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <Button
      disabled={disabled}
      size={size}
      type={'text'}
      className={classNames(doraemonClassName('minimized-button'), className)}
      icon={<MinusCircleFilled />}
      {...props}
    />
  );
};
