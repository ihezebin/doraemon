// @ts-ignore
import { FullscreenButton } from '@hezebin/doraemon';
import React from 'react';

const FullscreenButtonExample = () => {
  return (
    <div>
      <FullscreenButton size={'small'} />
      <FullscreenButton size={'middle'} />
      <FullscreenButton size={'large'} />
      <FullscreenButton size={'large'} disabled />
    </div>
  );
};

export default  FullscreenButtonExample
