import React from 'react';
// @ts-ignore
import { ExitButton } from '@hezebin/doraemon';

const ExitButtonExample = () => {
  return (
    <div>
      <ExitButton size={'small'} />
      <ExitButton size={'middle'} />
      <ExitButton size={'large'} />
      <ExitButton size={'large'} disabled />
    </div>
  );
};

export default ExitButtonExample;
