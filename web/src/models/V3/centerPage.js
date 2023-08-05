import { getCenterPageDataV3} from '../../services';
//注意要在index.js 添加 app.model(require('./models/centerPage').default);
export default {
  // 命名空间 (必填)
  namespace: 'centerPageV3',

  // 数据
  state: {},

  // 路由监听
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen((location, action) => {
        // 参数可以直接简写成{pathname}
        if (location.pathname === '/' ) {
          dispatch({ type: 'getCenterPageDataV3' });
        }
      });
    },
  },

  // 异步请求
  effects: {
    *getCenterPageDataV3({ payload }, { call, put }) {
      const data = yield call(getCenterPageDataV3);
      if (data) {
        yield put({
          type: 'setData',
          payload: data,
        });
      } else {
        console.log(`获取中间数据数据失败`);
      }
    },
  },

  // 同步操作
  reducers: {
    setData(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
