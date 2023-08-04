import React, {Component} from 'react';
import {connect} from 'dva';
import {PageStyle, PageContent} from './style';
import TopPage from '../../components/secondPage/topPage';
import LeftPage from '../../components/secondPage/leftPage';
import CenterPage from '../../components/secondPage/centerPage';
import RightPage from '../../components/secondPage/rightPage';
import {push} from "connected-react-router";


function SecondPage({dispatch}) {
    // 添加跳转到HomePage的函数
    const goToHomePage = () => {
        dispatch(push('/'));
    };


    return (
        <PageStyle>
            {/* 顶部 */}
            <TopPage/>
            <PageContent>
                <LeftPage />
                <CenterPage className='center-page'/>
                <RightPage />
            </PageContent>

        </PageStyle>
    );
}

export default connect()(SecondPage);
