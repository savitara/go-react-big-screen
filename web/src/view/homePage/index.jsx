import React, { Component } from 'react';
import { connect } from 'dva';
import { IndexPageStyle, IndexPageContent } from './style';
import TopPage from '../../components/topPage';
import LeftPage from '../../components/leftPage';
import CenterPage from '../../components/centerPage';
import RightPage from '../../components/rightPage';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <IndexPageStyle>
                {/* 右上角日期 */}
                <TopPage />
                <IndexPageContent>
                    {/* 左侧内容 */}
                    <LeftPage />
                    {/* 中间内容 */}
                    <CenterPage className='center-page' />
                    {/* 右侧内容 */}
                    <RightPage />
                </IndexPageContent>
            </IndexPageStyle>
        );
    }
}

export default connect()(HomePage);
