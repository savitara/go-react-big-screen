import {getSecondPageData, getSecondPageDataByParams} from '../services';
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
                if (location.pathname === '/second') {
                    dispatch({type: 'getSecondPageData',  params: params});
                    // dispatch({type: 'getSecondPageDataByParams',  params: params});

                }

            });
        },
    },

    // 异步请求
    effects: {
        * getSecondPageData({payload,params}, {call, put}) {
            const data = yield call(getSecondPageData, payload); // 将参数传递给异步请求函数
            if (data) {
                // data.params = params;
                yield put({
                    type: 'setData',
                    payload: data,
                });
                yield put({
                    type: 'setParams',
                    payload: params,
                });
            } else {
                console.log(`获取中间数据数据失败`);
            }
        },
        * getSecondPageDataByParams({payload,params}, {call, put}) {
            const data = yield call(getSecondPageDataByParams(params), payload); // 将参数传递给异步请求函数
            if (data) {
                // data.params = params;
                yield put({
                    type: 'setData',
                    payload: data,
                });
                // yield put({
                //     type: 'setParams',
                //     payload: params,
                // });
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
        // 设置参数
        setParams(state, action) {
            return {...state, params: action.payload};
        },
        removeParams(state) {
            // 移除数据，将data设置为null或空对象，根据你的需求
            return { ...state, params: null };
        },
    },

};
