import React, {Fragment} from 'react';
import {Router, Route, Switch} from 'dva/router';
import {Iconstyle} from '../assets/icon/iconfont';
import {Globalstyle} from '../style/global.js';
import HomePage from "../view/homePage";
import SecondPage from "../view/secondPage";
import V1 from "../view/v1";
import V2 from "../view/v2";
import Garage from "../view/garage";

function RouterConfig({history}) {
    const route = () => {
        return (
            <Fragment>
                {/* 全局样式注册到界面中 */}
                <Iconstyle></Iconstyle>
                <Globalstyle></Globalstyle>
                {/* 路由管理 */}
                <Switch>
                    <Route path='/home' exact component={HomePage}/>
                    <Route path='/v1' exact component={V1}/>
                    <Route path='/' exact component={V2}/>
                    <Route path='/g' exact component={Garage}/>
                    <Route path='/second' exact component={SecondPage}/>
                </Switch>
            </Fragment>
        );
    };

    return <Router history={history}>{route()}</Router>;
}

export default RouterConfig;
