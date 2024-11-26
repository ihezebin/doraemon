import React, { useState } from 'react';
// @ts-ignore
import { Typewriter } from '@hezebin/doraemon';
import { Button } from 'antd';

const TypewriterExample = () => {
  const [text, setText] = useState('init text');

  return (
    <div>
      <Button onClick={() => setText('hello world')}>change text</Button>

      <Typewriter interval={100} timeout={300} text={text} />
      <Typewriter
        showCursorWhenTyping={false}
        text="颠三倒四卡里的撒了 dsadsa 领导可能是啊恐龙当家上课啦电话两节课萨迪克撒谎看点啥科技大干撒阿看见两个都是卡了更大"
      />
    </div>
  );
};

export default TypewriterExample;
