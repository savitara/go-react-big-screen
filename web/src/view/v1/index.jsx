


import React, { Component } from 'react';
import { connect } from 'dva';
import { IndexPageStyle, IndexPageContent } from './style';
import TopPage from '../../components/topPage';
import LeftPage from '../../components/leftPage';
import CenterPage from '../../components/centerPage';
import RightPage from '../../components/rightPage';
import {push} from "connected-react-router";



function V1({ dispatch }) {
    // 添加跳转到HomePage的函数
    const goToHomePage = () => {
        dispatch(push('/'));
    };


    return (
        <IndexPageStyle>
            {/* 右上角日期 */}
            <TopPage title={'数据大屏'}/>
            <IndexPageContent>
                 左侧内容
                <LeftPage />
                 中间内容
                <CenterPage className='center-page' />
                {/* 右侧内容 */}
                <RightPage />

            </IndexPageContent>

        </IndexPageStyle>
    );
}

export default connect()(V1);
