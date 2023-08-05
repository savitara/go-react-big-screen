


import React, { Component } from 'react';
import { connect } from 'dva';
import { IndexPageStyle, IndexPageContent } from './style';
import TopPage from '../../components/v3/topPage';
import LeftPage from '../../components/v3/leftPage';
import CenterPage from '../../components/v3/centerPage';
import RightPage from '../../components/v3/rightPage';
import {push} from "connected-react-router";



function V3({ dispatch }) {
    // 添加跳转到HomePage的函数
    const goToHomePage = () => {
        dispatch(push('/'));
    };


    return (
        <IndexPageStyle>
            {/* 右上角日期 */}
            <TopPage title={'一体化数据大平台'}/>
            <IndexPageContent>
                 {/*左侧内容*/}
                <LeftPage />
                 {/*中间内容*/}
                <CenterPage className='center-page' />
                {/* 右侧内容 */}
                <RightPage />

            </IndexPageContent>

        </IndexPageStyle>
    );
}

export default connect()(V3);
