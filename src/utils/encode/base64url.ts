export const base64urlEncode = (data: string): string => {
  // 将字符串转换为 Base64
  const base64 = btoa(data);
  // 替换 URL 不安全字符并移除填充符号（=）
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

export const base64urlDecode = (data: string): string => {
  // 还原 URL 不安全字符并补齐填充符号
  const base64 = data.replace(/-/g, '+').replace(/_/g, '/');
  const padding =
    base64.length % 4 === 0 ? '' : '='.repeat(4 - (base64.length % 4));
  return atob(base64 + padding);
};
