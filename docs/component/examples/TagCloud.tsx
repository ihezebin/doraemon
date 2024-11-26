import React, { useCallback, useState } from 'react';
// @ts-ignore
import { TagCloud } from '@hezebin/doraemon';

const TagCloudExample = () => {
  const [a, setA] = useState('xxxxx');

  const [data] = useState([
    { text: '标签1', weight: 10 },
    { text: '标签2', weight: 2 },
    { text: '标签3', weight: 30 },
    { text: '标签4', weight: 3 },
    { text: '标签5', weight: 7 },
    { text: '标签6', weight: 8 },
    { text: '标签7', weight: 4 },
    { text: '标签8', weight: 5 },
    { text: '标签9', weight: 6 },
    { text: '标签10', weight: 9 },
    { text: '标签11', weight: 11 },
    { text: '标签12', weight: 12 },
    { text: '标签13', weight: 6 },
    { text: '标签14', weight: 7 },
  ]);

  const handleClick = useCallback((tag: any) => {
    console.log(tag.text);
  }, []);

  return (
    <div>
      <div onClick={() => setA(Math.random() + '')}>{a}</div>
      <TagCloud onClick={handleClick} data={data} />
    </div>
  );
};

export default TagCloudExample;
