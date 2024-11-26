import React from 'react';
// @ts-ignore
import { MinimizedButton } from '@hezebin/doraemon';

const MinimizedButtonExample = () => {
  return (
    <div>
      <MinimizedButton size={'small'} />
      <MinimizedButton size={'middle'} />
      <MinimizedButton size={'large'} />
      <MinimizedButton size={'large'} disabled />
    </div>
  );
};

export default MinimizedButtonExample;
