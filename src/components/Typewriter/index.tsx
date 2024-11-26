import React, { useEffect, useState } from 'react';
import './index.scss';
import { doraemonClassName } from '../../utils/internal';

interface TypewriterProps extends React.ComponentProps<any> {
  text: string;
  /**
   * @description 打字速度
   * @default 120, timeout 的 ms 值
   */
  interval?: number;
  /**
   * @description 多久延迟后开始打字
   */
  timeout?: number;
  showCursorWhenTyping?: boolean;
}

const Typewriter = ({ text = '', speed = 120, className, timeout = 500, showCursorWhenTyping = true, ...restProps }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [plusTimeout, setPlusTimeout] = useState(timeout || 0)

  useEffect(() => {
    if (isTyping && displayedText.length < text.length) {
      setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1))
        setPlusTimeout(0)
      }, speed + plusTimeout)
    } else if (displayedText.length === text.length) {
      setIsTyping(false)
    }
  }, [displayedText, isTyping, speed, timeout, text])

  useEffect(() => {
    setDisplayedText('')
    setIsTyping(true)
  }, [speed, text, timeout])

  return (
    <div className={className} {...restProps}>
      {displayedText}
      {(showCursorWhenTyping || !isTyping) && <span className={doraemonClassName('blinking')}> _</span>}
    </div>
  )
}

export default Typewriter
