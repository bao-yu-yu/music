import http from './public'

/* 获取侧边栏数据 */
export const sys_getDictionary= dType => {
  return http.requestQuickGet('http://127.0.0.1/')
};
