import React from 'react';
import {connect} from 'react-redux';
import {PageStyle, PageContent} from './style';
import TopPage from '../../components/homePage/topPage';
import CenterPage from '../../components/homePage/centerPage';
import {push} from 'connected-react-router';

function HomePage({dispatch}) {
  // 添加跳转到SecondPage的函数
  const goToSecondPage = () => {
    dispatch(push('/second'));
  };


  return (
    <PageStyle>
      {/* 右上角日期 */}
      <TopPage title={'数据大屏'}/>

      <PageContent>
        <CenterPage className='center-page'/>
      </PageContent>

    </PageStyle>
  );
}

export default connect()(HomePage);
