import {getRightPageDataV3} from "../../services";
// 注意要在index.js 添加 app.model(require('./models/rightPage').default);
export default {
    // 命名空间 (必填)
    namespace: 'rightPageV3',

    // 数据
    state: {},

    // 路由监听
    subscriptions: {
        setup({dispatch, history}) {
            return history.listen((location, action) => {
                // 参数可以直接简写成{pathname}
                if (location.pathname === '/') {
                    dispatch({type: 'getRightPageDataV3'});
                }
            });
        },
    },

    // 异步请求
    effects: {
        * getRightPageDataV3({payload}, {call, put}) {
            const data = yield call(getRightPageDataV3);
            if (data) {
                yield put({
                    type: 'setData',
                    payload: data,
                });
            } else {
                console.log(`获取右侧数据数据失败`);
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
