import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ExitButton,
  FullscreenButton,
  FullscreenExitButton,
  MinimizedButton,
} from '../src/components/Button';
import styles from './index.module.scss';
import ResizeBorderExample from './ResizeBorder';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className={styles.dev}>
      <div>
        <ExitButton size={'small'} />
        <ExitButton size={'middle'} />
        <ExitButton size={'large'} />
        <FullscreenButton size={'small'} />
        <FullscreenButton size={'middle'} />
        <FullscreenButton size={'large'} />
        <FullscreenExitButton size={'small'} />
        <FullscreenExitButton size={'middle'} />
        <FullscreenExitButton size={'large'} />
        <MinimizedButton size={'small'} />
        <MinimizedButton size={'middle'} />
        <MinimizedButton size={'large'} />
        <MinimizedButton size={'large'} disabled />
      </div>
      <div>
        <ResizeBorderExample />
      </div>
    </div>
  </StrictMode>,
);
