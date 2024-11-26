import React, { ReactNode, useState } from 'react';
import { Button, Input, Space } from 'antd';
import { KeyOutlined } from '@ant-design/icons';

interface CaptchaInputProps extends React.ComponentProps<any> {
  disabled?: boolean;
  canClick?: boolean;
  intervalSec?: number;
  placeholder?: string;
  onClick?: () => Promise<any>;
  len?: number;
  mode?: 'inside' | 'outside';
  icon?: ReactNode;
}

const generateText = '生成验证码'
const retryText = '重新生成'

const CaptchaInput = ({
  onClick = () =>
    new Promise((resolve, reject) => {
      const err = 'CaptchaInput onClick undefined'
      reject(err)
    }),
  intervalSec = 60,
  len = 6,
  placeholder = '请输入验证码',
  disabled,
  canClick = true,
  mode = 'inside',
  icon = <KeyOutlined />,
  ...rest
}: CaptchaInputProps) => {
  const [millSec, setMillSec] = useState(0)
  const [loading, setLoading] = useState(false)

  const onGenerateCaptcha = () => {
    // 点击按钮后置为加载状态，等待异步请求完成
    setLoading(true)
    onClick()
      .then(() => {
        // 执行异步请求成功后，开始倒计时
        setLoading(false) // 异步请求完成后，置为非加载状态
        setMillSec(intervalSec)
        const interval = setInterval(() => {
          // 创建一个定时器倒计时
          setMillSec((v) => {
            // 倒计时为0后，清除定时器
            if (v === 0) clearInterval(interval)
            return v - 1
          })
        }, 1000)
      })
      .catch((err) => {
        // 处理异步请求失败的情况
        setLoading(false)
        console.error('catch err when onGenerateCaptcha: ' + err)
      })
  }

  return mode === 'inside' ? (
    <Input
      allowClear
      maxLength={len}
      disabled={disabled}
      prefix={icon}
      suffix={
        <Button style={{ padding: 0, height: 'auto' }} loading={loading} onClick={onGenerateCaptcha} type={'link'} disabled={millSec > 0 || !canClick}>
          {millSec <= 0 ? generateText : `${millSec}s ${retryText}`}
        </Button>
      }
      placeholder={placeholder}
      {...rest}
    />
  ) : (
    <Space.Compact style={{ width: '100%' }}>
      <Input allowClear maxLength={len} disabled={disabled} prefix={icon} placeholder={placeholder} {...rest} />
      <Button type="primary" loading={loading} onClick={onGenerateCaptcha} disabled={millSec > 0 || !canClick}>
        {millSec <= 0 ? generateText : `${millSec}s ${retryText}`}
      </Button>
    </Space.Compact>
  )
}

export default CaptchaInput
