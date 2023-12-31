import request from '../utils/request';
import { get } from '../utils/axiosRequest';
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

// 获取子页界顶部面数据请求
export const getSecondPageData = async () => {
  return request('/api/secondPageData').then(response => {
    return response.data;
  });
};

export const getSecondPageDataByParams = async (params) => {
  try {
    const response =  await get('/api/secondPageData/query', { params });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


export const getTest = async () => {
  try {
    const response =  await get('/api/test', );
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};



// V3


// 获取右侧界面数据请求
export const getRightPageDataV3 = async () => {
  return request('/api/v3/rightPageData').then(response => {
    return response.data;
  });
};


// 获取左侧界面数据请求
export const getLeftPageDataV3 = async () => {
  return request('/api/v3/leftPageData').then(response => {
    return response.data;
  });
};


// 获取中间界面数据请求
export const getCenterPageDataV3 = async () => {
  return request('/api/v3/centerPageData').then(response => {
    return response.data;
  });
};
