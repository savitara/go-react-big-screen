import request from '../utils/request';

// V1版本
// 在models中添加

// 获取左侧界面数据请求
export const getLeftPageData = async () => {
  return request('/api/leftPageData').then(response => {
    return response.data;
  });
};

// 获取中间界面数据请求
export const getCenterPageData = async () => {
  return request('/api/centerPageData').then(response => {
    return response.data;
  });
};

// 获取右侧界面数据请求
export const getRightPageData = async () => {
  return request('/api/rightPageData').then(response => {
    return response.data;
  });
};


// V2版本
// 在models中添加
// 获取首页界面数据请求
export const getHomePageData = async () => {
  return request('/api/homePageData').then(response => {
    return response.data;
  });
};

// 获取子页界面数据请求
export const getSecondPageData = async () => {
  return request('/api/secondPageData').then(response => {
    return response.data;
  });
};

