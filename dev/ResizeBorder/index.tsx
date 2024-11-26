import React, { useEffect, useRef, useState } from 'react';
import { Input } from 'antd';

import {
  ExitButton,
  FullscreenButton,
  FullscreenExitButton,
  MinimizedButton,
  mouseDownToMove,
  ResizeBorder,
} from '../../src/index';

import style from './index.module.scss';

const ResizeBorderExample = () => {
  const ref = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);
  const [a, setA] = useState<number>(0);

  const [init, setInit] = useState({
    width: 200,
    height: 300,
    top: 400,
    left: 100,
  });

  useEffect(() => {
    console.log(a);
    return () => {
      console.log('a leave', a);
    };
  }, [a]);

  return (
    <div style={{ display: 'flex', padding: 40 }}>
      <div
        style={{
          zIndex: 10,
          width: 400,
          height: 600,
          backgroundColor: 'lightgray',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        ref={ref}
      >
        <div
          className={style.header}
          onMouseDown={(e) => {
            if (!ref || !ref.current) return;
            // e.stopPropagation()
            // e.preventDefault()
            mouseDownToMove(e, ref.current);
          }}
        >
          <ExitButton size={'small'} />
          <FullscreenButton />
          <FullscreenExitButton size={'large'} />
          <MinimizedButton />
        </div>
        <div style={{ backgroundColor: 'red' }}>
          footer
          <Input placeholder={'footer'} />
        </div>
        <ResizeBorder
          pinned
          position={'fixed'}
          containerRef={ref}
          minWidth={100}
          minHeight={100}
          initial={init}
          onMouseUp={(info) => {
            console.log('up:', info);
            setA((a) => a + 1);
          }}
        />
      </div>

      <div
        ref={testRef}
        style={{
          width: 300,
          height: 300,
          backgroundColor: 'red',
          position: 'absolute',
        }}
        onMouseDown={(e) => {
          if (!testRef || !testRef.current) return;
          mouseDownToMove(
            e,
            testRef.current,
            undefined,
            function (width, height, top, left) {
              console.log('up:', width, height, top, left);
            },
          );
        }}
      >
        <div
          style={{ width: 200, height: 200, backgroundColor: 'blue' }}
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
        ></div>
        <ResizeBorder
          position={'fixed'}
          pinned
          containerRef={testRef}
          minWidth={210}
          minHeight={210}
          maxHeight={400}
          maxWidth={300}
        />
      </div>
    </div>
  );
};

export default ResizeBorderExample
