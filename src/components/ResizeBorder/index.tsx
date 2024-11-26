import React, { memo, RefObject, useEffect, useMemo } from 'react';

import { doraemonClassName } from '../../utils/internal';
import './index.scss';

export type MouseCallBack = (
  width: number,
  height: number,
  top: number,
  left: number,
) => void;

type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

type Border = 'top' | 'bottom' | 'left' | 'right'

export interface ResizeBorderProps extends React.ComponentProps<any> {
  containerRef: RefObject<any>
  position?: 'absolute' | 'fixed' | 'relative'
  initial?: { width?: number; height?: number; top?: number; left?: number }
  minWidth?: number
  minHeight?: number
  maxWidth?: number
  maxHeight?: number
  onMouseDown?: MouseCallBack
  onMouseUp?: MouseCallBack
  onMouseMove?: MouseCallBack
  corners?: Corner[]
  borders?: Border[]
  pinned?: boolean
}

const ResizeBorder = ({
  containerRef,
  initial,
  minWidth = 0,
  minHeight = 0,
  maxWidth,
  maxHeight,
  onMouseMove,
  onMouseUp,
  onMouseDown,
  position = 'relative',
  corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
  borders = ['top', 'bottom', 'left', 'right'],
  pinned = false,
}: ResizeBorderProps) => {
  const bordersAndCorners = useMemo(() => {
    // 分别去重
    const distinctCorners = corners?.filter((item, index) => corners.indexOf(item) === index) || []
    const distinctBorders = borders?.filter((item, index) => borders.indexOf(item) === index) || []
    return [...distinctBorders, ...distinctCorners]
  }, [borders, corners])

  useEffect(() => {
    if (!containerRef || !containerRef.current) return
    const container = containerRef.current

    if (initial) {
      const { left, top, height, width } = initial
      if (left !== undefined && left !== null) container.style.left = `${left}px`
      if (top !== undefined && top !== null) container.style.top = `${top}px`
      if (width) container.style.width = `${width}px`
      if (height) container.style.height = `${height}px`
    }
  }, [initial])

  useEffect(() => {
    if (!containerRef || !containerRef.current) return
    const container = containerRef.current
    container.style.position = position
  }, [position])

  const handleBorderMouseDown = (e: React.MouseEvent, border: string) => {
    e.stopPropagation()
    e.preventDefault()

    if (!containerRef || !containerRef.current) return
    const container = containerRef.current

    const { left: startLeft, top: startTop } = container.getBoundingClientRect()
    const startWidth = container.offsetWidth
    const startHeight = container.offsetHeight

    const handleBorderMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { offsetWidth, offsetHeight } = container
      const { left: currentLeft, top: currentTop } = container.getBoundingClientRect()

      let targetWidth: number = 0
      let targetHeight: number = 0
      let newLeft: number | undefined
      let newTop: number | undefined

      if (border.includes('right')) {
        targetWidth = clientX - currentLeft
        if (clientX > innerWidth) targetWidth = innerWidth - currentLeft
      }
      if (border.includes('bottom')) {
        targetHeight = clientY - currentTop
        if (clientY > innerHeight) targetHeight = innerHeight - currentTop
      }
      if (border.includes('left')) {
        const offsetRight = innerWidth - offsetWidth - currentLeft
        targetWidth = innerWidth - offsetRight - clientX
        if (clientX <= 0) targetWidth = offsetWidth

        newLeft = clientX
        if (newLeft + offsetWidth > innerWidth) newLeft = innerWidth - offsetWidth
        if (newLeft < 0) newLeft = 0

        if (targetWidth < minWidth || (maxWidth && targetWidth > maxWidth)) {
          newLeft = undefined
        }
      }
      if (border.includes('top')) {
        const offsetBottom = innerHeight - offsetHeight - currentTop
        targetHeight = innerHeight - offsetBottom - clientY
        if (clientY <= 0) targetHeight = offsetHeight

        newTop = clientY
        if (newTop + offsetHeight > innerHeight) newTop = innerHeight - offsetHeight
        if (newTop < 0) newTop = 0

        if (targetHeight < minHeight || (maxHeight && targetHeight > maxHeight)) {
          newTop = undefined
        }
      }

      if (targetWidth) {
        if (targetWidth < minWidth) targetWidth = minWidth
        if (maxWidth && targetWidth > maxWidth) targetWidth = maxWidth
        container.style.width = `${targetWidth}px`
      }

      if (targetHeight) {
        if (targetHeight < minHeight) targetHeight = minHeight
        if (maxHeight && targetHeight > maxHeight) targetHeight = maxHeight
        container.style.height = `${targetHeight}px`
      }

      if (pinned) {
        newLeft && (container.style.left = `${newLeft}px`)
        newTop && (container.style.top = `${newTop}px`)
      }

      onMouseMove && onMouseMove(offsetWidth, offsetHeight, currentTop, currentLeft)
    }

    const handleBorderMouseUp = (e: MouseEvent) => {
      document.removeEventListener('mousemove', handleBorderMouseMove)
      document.removeEventListener('mouseup', handleBorderMouseUp)

      if (onMouseUp) {
        const { left: currentLeft, top: currentTop } = container.getBoundingClientRect()
        onMouseUp(container.offsetWidth, container.offsetHeight, currentTop, currentLeft)
      }
    }

    document.addEventListener('mousemove', handleBorderMouseMove)
    document.addEventListener('mouseup', handleBorderMouseUp)

    onMouseDown && onMouseDown(startWidth, startHeight, startTop, startLeft)
  }

  return (
    <>
      {bordersAndCorners.map((border) => (
        <div
          key={border}
          className={doraemonClassName(`resize-border-${border}`)}
          onMouseDown={(e) => {
            handleBorderMouseDown(e, border)
          }}></div>
      ))}
    </>
  )
}

export default memo(ResizeBorder)

export const mouseDownToMove = (e: React.MouseEvent, container: HTMLElement, mouseMoveCallback?: MouseCallBack, mouseUpCallback?: MouseCallBack) => {
  if (!container) return
  const startX = e.clientX
  const startY = e.clientY

  const { left: startLeft, top: startTop } = container.getBoundingClientRect()

  const onMouseMove = (e: MouseEvent) => {
    const moveX = e.clientX - startX
    const moveY = e.clientY - startY

    let left = startLeft + moveX
    let top = startTop + moveY
    if (left < 0) left = 0
    if (left > innerWidth - container.offsetWidth) left = innerWidth - container.offsetWidth
    if (top < 0) top = 0
    if (top > innerHeight - container.offsetHeight) top = innerHeight - container.offsetHeight

    container.style.left = `${left}px`
    container.style.top = `${top}px`
    mouseMoveCallback && mouseMoveCallback(container.offsetWidth, container.offsetHeight, top, left)
  }

  const onMouseUp = () => {
    mouseUpCallback && mouseUpCallback(container.offsetWidth, container.offsetHeight, startTop, startLeft)
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
}
