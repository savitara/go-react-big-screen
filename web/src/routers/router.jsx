import React, {Fragment} from 'react';
import {Router, Route, Switch} from 'dva/router';
// import IndexPage from './IndexPage';
import {Iconstyle} from '../assets/icon/iconfont';
import {Globalstyle} from '../style/global.js';
// import SecondPage from "../view/secondPage";
import HomePage from "../view/homePage";

function RouterConfig({history}) {
    const route = () => {
        return (
            <Fragment>
                {/* 全局样式注册到界面中 */}
                <Iconstyle></Iconstyle>
                <Globalstyle></Globalstyle>

                {/* 路由管理 */}
                <Switch>
                    <Route path='/' exact component={HomePage}/>
                    {/*<Route path='/second' exact component={SecondPage}/>*/}

                </Switch>
            </Fragment>
        );
    };

    return <Router history={history}>{route()}</Router>;
}

export default RouterConfig;
