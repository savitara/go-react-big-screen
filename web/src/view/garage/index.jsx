


import React, { Component } from 'react';
import { connect } from 'dva';
import { IndexPageStyle, IndexPageContent } from './style';
import TopPage from '../../components/garage/topPage';
import LeftPage from '../../components/garage/leftPage';
import CenterPage from '../../components/garage/centerPage';
import RightPage from '../../components/garage/rightPage';
import {push} from "connected-react-router";



function Garage({ dispatch }) {
    // 添加跳转到HomePage的函数
    const goToHomePage = () => {
        dispatch(push('/'));
    };


    return (
        <IndexPageStyle>
            {/* 右上角日期 */}
            <TopPage title={'立体车库数据'}/>
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

export default connect()(Garage);
