import React from 'react';
// @ts-ignore
import { CaptchaInput } from '@hezebin/doraemon';

const CaptchaInputExample = () => {
  const handleClick = () => {
    return new Promise((resolve, reject) => {
      resolve('ok');
    });
  };

  return (
    <div>
      <CaptchaInput onClick={handleClick} />
      <CaptchaInput mode={'outside'} onClick={handleClick} />
    </div>
  );
};

export default CaptchaInputExample;
