// 是否为手机号
export const isPhoneNumber = (str: string) => /^1[3456789]\d{9}$/.test(str)

// 是否邮箱
export const isEmail = (str: string) => /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str)
