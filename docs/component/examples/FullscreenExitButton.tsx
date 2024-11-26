// @ts-ignore
import { FullscreenExitButton } from '@hezebin/doraemon';
import React from 'react';

const FullscreenExitButtonExample = () => {
  return (
    <div>
      <FullscreenExitButton size={'small'} />
      <FullscreenExitButton size={'middle'} />
      <FullscreenExitButton size={'large'} />
      <FullscreenExitButton size={'large'} disabled />
    </div>
  );
};

export default  FullscreenExitButtonExample
