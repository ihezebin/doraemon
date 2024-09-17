import { useCallback, useState } from 'react'
import { isFunction } from '../../utils'

export type SetState<T extends Record<string, any>> = (state: Partial<T> | null | ((prevState: T) => Partial<T>)) => void

export const useObjState = <T extends Record<string, any>>(initialState: T | (() => T)): [T, SetState<T>] => {
  const [state, setState] = useState<T>(initialState)

  const setObjState: SetState<T> = useCallback((partState) => {
    setState((prevState: T) => {
      const newState = isFunction(partState) ? partState(prevState) : partState
      return newState ? { ...prevState, ...newState } : { ...prevState }
    })
  }, [])

  return [state, setObjState]
}
