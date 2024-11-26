import React, { memo } from 'react';
import classNames from 'classnames';

import './index.scss';
import { doraemonClassName } from '../../utils/internal';

export type TagConfig = {
  text: string;
  weight?: number;
  key?: string;
};

export interface TagCloudProps extends React.ComponentProps<any> {
  data: TagConfig[]
  className?: string
  tagClassName?: string
  /**
   * @type (tag: TagConfig) => void
   * @param tag
   */
  onClick?: (tag: TagConfig) => void
  /**
   * @description 标签的基础大小
   * @default 14
   */
  baseFontSize?: number
  /**
   * @description 标签的最大增大像素
   * @default 20
   */
  maxGrowFontSize?: number
  center?: boolean
}

const TagCloud = ({ data: tags, className, tagClassName, onClick, baseFontSize = 14, maxGrowFontSize = 20, center, style: restStyle, ...restProps }: TagCloudProps) => {
  // 计算权重的最小值和最大值
  const minWeight = Math.min(...tags.map((tag) => tag.weight || Math.random() * 1000))
  const maxWeight = Math.max(...tags.map((tag) => tag.weight || Math.random() * 1000))

  const diffWeight = maxWeight - minWeight

  return (
    <div
      className={classNames(doraemonClassName('tag-cloud'), className)}
      style={{
        justifyContent: center ? 'center' : 'flex-start',
        alignItems: center ? 'center' : 'flex-end',
        ...restStyle,
      }}
      {...restProps}>
      {tags
        ?.sort(() => Math.random() - 0.5)
        ?.map((tag, index) => {
          // 计算标签的大小、粗细和颜色
          const growSize = diffWeight === 0 ? maxGrowFontSize : (((tag.weight || Math.random() * 1000) - minWeight) / diffWeight) * maxGrowFontSize
          const size = baseFontSize + growSize

          const growWeight = diffWeight === 0 ? 400 : (((tag.weight || Math.random() * 1000) - minWeight) / diffWeight) * 400
          const fontWeight = 300 + growWeight
          const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 0.6 + 0.5})`

          return (
            <span
              key={index}
              onClick={() => {
                onClick && onClick(tag)
              }}
              className={tagClassName}
              style={{ fontWeight, fontSize: `${size}px`, color }}>
              {tag.text}
            </span>
          )
        })}
    </div>
  )
}

export default memo(TagCloud)
