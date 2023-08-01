


import React, { Component } from 'react';
import { connect } from 'dva';
import { IndexPageStyle, IndexPageContent } from './style';
import TopPage from '../../components/topPage';
import LeftPage from '../../components/leftPage';
import CenterPage from '../../components/centerPage';
import RightPage from '../../components/rightPage';
import {Link} from "react-router-dom";

class SecondPage extends Component {
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
          {/*<LeftPage />*/}
          {/* 中间内容 */}
          {/*<CenterPage className='center-page' />*/}
          {/*/!* 右侧内容 *!/*/}
          <RightPage />
            <Link to="/">前往首页页面</Link>

        </IndexPageContent>
      </IndexPageStyle>
    );
  }
}

export default connect()(SecondPage);
