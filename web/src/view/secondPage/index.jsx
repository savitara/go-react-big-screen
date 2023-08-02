


import React, { Component } from 'react';
import { connect } from 'dva';
import { PageStyle, PageContent } from './style';
import TopPage from '../../components/secondPage/topPage';
import LeftPage from '../../components/secondPage/leftPage';
import CenterPage from '../../components/secondPage/centerPage';
import RightPage from '../../components/secondPage/rightPage';
import {push} from "connected-react-router";



function SecondPage({ dispatch }) {
    // 添加跳转到HomePage的函数
    const goToHomePage = () => {
        dispatch(push('/'));
    };


    return (
        <PageStyle>
            {/* 右上角日期 */}
            <TopPage title={'数据大屏'}/>
            <PageContent>
                {/* 左侧内容 */}
                {/*<LeftPage />*/}
                {/* 中间内容 */}
                <CenterPage className='center-page' />
                {/*/!* 右侧内容 *!/*/}
                {/*<RightPage />*/}

                {/* 添加跳转按钮 */}
                <text onClick={goToHomePage}>跳转到HomePage</text>
            </PageContent>

        </PageStyle>
    );
}

export default connect()(SecondPage);
