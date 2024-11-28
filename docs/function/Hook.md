---
title: Hooks
nav:
  title: 函数
  order: 2
---
# Hooks
常用 Hook 查阅 https://ahooks.js.org/zh-CN/hooks

## useObjState
对于对象的状态管理，哪怕时必须字段，set 时也可只传入部分字段，实现部分更新

```tsx
import { Button } from 'antd'

import { useObjState } from '@hezebin/doraemon'

interface IState {
  name: string
  age: number
  hobby: string[]
}
const UseObjStateExample = () => {
  const [state, setState] = useObjState<IState>({
    name: 'hezebin',
    age: 0,
    hobby: [],
  })

  return (
    <div>
      <div>obj state: {JSON.stringify(state)}</div>
      <br />
      <Button
        onClick={() =>
          setState({
            name: 'hezebin change',
          })
        }>
        set name
      </Button>
      <Button
        onClick={() =>
          setState((prev) => {
            return { age: prev.age + 1, hobby: [...prev.hobby, 'test'] }
          })
        }>
        add age: {state.age + 1}
      </Button>
    </div>
  )
}

export default UseObjStateExample
```
