import React from 'react';
import { connect } from 'react-redux';
import { IndexPageStyle, IndexPageContent } from './style';
import TopPage from '../../components/topPage';
import LeftPage from '../../components/leftPage';
import CenterPage from '../../components/centerPage';
import RightPage from '../../components/rightPage';
import { push } from 'connected-react-router'; // 导入连接到Redux的router action

function HomePage({ dispatch }) {
    // 添加跳转到SecondPage的函数
    const goToSecondPage = () => {
        dispatch(push('/second'));
    };


    return (
        <IndexPageStyle>
            {/* 右上角日期 */}
            <TopPage />
            <IndexPageContent>
                {/* 左侧内容 */}
                <LeftPage />
                {/* 中间内容 */}
                {/*<CenterPage className='center-page' />*/}
                {/*/!* 右侧内容 *!/*/}
                {/*<RightPage />*/}

                {/* 添加跳转按钮 */}
                <button onClick={goToSecondPage}>跳转到SecondPage</button>
            </IndexPageContent>

        </IndexPageStyle>
    );
}

export default connect()(HomePage);
