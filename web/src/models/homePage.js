import { getHomePageData } from '../services';
// 注意要在index.js 添加 app.model(require('./models/homePage').default);
export default {
  // 命名空间 (必填)
  namespace: 'homePage',

  // 数据
  state: {},

  // 路由监听
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen((location, action) => {
        // 参数可以直接简写成{pathname}
        if (location.pathname === '/'  ) {
          dispatch({ type: 'getHomePageData' });
          // 移除 secondPage 命名空间的数据
          dispatch({type: 'removeOtherNamespaceData'})
        }
      });
    },
  },

  // 异步请求
  effects: {
    *getHomePageData({ payload }, { call, put }) {
      const data = yield call(getHomePageData);
      if (data) {
        yield put({
          type: 'setData',
          payload: data,
        });

      } else {
        console.log(`获取中间数据数据失败`);
      }
    },
    * removeOtherNamespaceData(_, {put}) {
      yield put({type: 'secondPage/removeParams'});
    }
  },

  // 同步操作
  reducers: {
    setData(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
