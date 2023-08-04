import {getSecondPageData} from '../services';
// 注意要在index.js 添加 app.model(require('./models/secondPage').default);
export default {
    // 命名空间 (必填)
    namespace: 'secondPage',

    // 数据
    state: {},

    // 路由监听
    subscriptions: {
        setup({dispatch, history}) {
            return history.listen((location, action) => {
                // 参数可以直接简写成{pathname}
                const params  = location.query;
                console.log('secondPage subscriptions', params);
                if (location.pathname === '/second') {
                    dispatch({type: 'getSecondPageData',  params: params});
                }

            });
        },
    },

    // 异步请求
    effects: {
        * getSecondPageData({payload,params}, {call, put}) {
            const data = yield call(getSecondPageData, payload); // 将参数传递给异步请求函数
            if (data) {
                data.params = params;
                console.log('secondPage getSecondPageData', data);
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
            return {...state, ...action.payload};
        },
    },
};
