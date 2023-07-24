import fetch from 'dva/fetch';
import API_CONFIG from '../../config/config.js';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const apiUrl = process.env.NODE_ENV === 'production' ? API_CONFIG.production : API_CONFIG.development;

  // 请求拦截器 - 可在请求前做一些处理
  if (options && options.beforeRequest) {
    options.beforeRequest();
  }

  return fetch(apiUrl + url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      // 响应拦截器 - 可在获取数据后做一些处理
      if (options && options.afterResponse) {
        options.afterResponse(data);
      }
      return { data };
    })
    .catch(err => {
      // 错误处理拦截器 - 可在错误发生后做一些处理
      if (options && options.errorHandler) {
        options.errorHandler(err);
      }
      return { err };
    });
}
