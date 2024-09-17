const CLASSNAME_PREFIX = 'doraemon'
export const doraemonClassName = (className: string): string => {
  return `${CLASSNAME_PREFIX}-${className}`
}
