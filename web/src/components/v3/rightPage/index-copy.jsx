/*
 * @FileName: index.jsx
 * @version:
 * @Author: LZH
 * @Date: 2023-07-18 17:11:09
 * @Description:
 * @LastEditors: LZH
 * @LastEditTime: 2023-07-24 17:04:34
 */
import React, {PureComponent} from 'react';
import {BorderBox12, BorderBox13} from '@jiaminghi/data-view-react';
import {ModuleTitle} from '../../../style/globalStyledSet';
import {connect} from 'dva';
import {
  RightPage,
  RightTopBox,
  RightCenterBox,
  RightBottomBox,
} from './style';
import {BorderRadiusBox2} from "../../homePage/centerPage/style";
import SolitaireCard from "../../homePage/centerPage/charts/SolitaireCard";
import EchartComponent from "../../homePage/centerPage/charts/EchartComponent";

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {resData} = this.props;
    let rightPage = null
    let topBoxData = null
    let bottomBoxData = null
    let centerData = null
    if (resData) {
      rightPage = resData.rightData
      if (rightPage.top) {
        topBoxData = rightPage.top
      }
      if (rightPage.bottom) {
        bottomBoxData = rightPage.bottom
      }
      if (rightPage.center) {
        centerData = rightPage.center
      }
    }

    return (
      <>
        {rightPage && (
          <RightPage>
            {/* 顶部数据区域 */}

            {topBoxData && (
              <RightTopBox>
                <BorderRadiusBox2>
                  <div className='left-top'>
                    <ModuleTitle>
                      <i className='iconfont'>&#xe78f;</i>
                      <span>{topBoxData.title}</span>
                    </ModuleTitle>
                    {/*/!*卡片*!/*/}
                    {/*{topBoxData.card && (*/}
                    {/*  <BorderRadiusBox2>*/}
                    {/*    <SolitaireCard solitaireCardData={topBoxData.card}>*/}
                    {/*    </SolitaireCard>*/}
                    {/*  </BorderRadiusBox2>*/}
                    {/*)}*/}

                    {/* 图表 */}
                    {topBoxData.chart && (
                      <EchartComponent
                        echartData={topBoxData.chart.chartOption}></EchartComponent>
                    )}
                  </div>
                  </BorderRadiusBox2>
              </RightTopBox>
            )}
            {/*中部数据区域*/}
            {centerData && (
              <RightCenterBox>
                <BorderRadiusBox2>
                  <div>
                    <ModuleTitle>
                      <i className='iconfont'>&#xe78f;</i>
                      <span>{centerData.title}</span>
                    </ModuleTitle>
                    {/*/!*卡片*!/*/}
                    {/*{centerData.card && (*/}
                    {/*  <BorderRadiusBox2>*/}
                    {/*    <SolitaireCard solitaireCardData={centerData.card}>*/}
                    {/*    </SolitaireCard>*/}
                    {/*  </BorderRadiusBox2>*/}
                    {/*)}*/}

                    {/* 图表 */}
                    {centerData.chart && (
                      <EchartComponent
                        echartData={centerData.chart.chartOption}></EchartComponent>
                    )}
                  </div>
                </BorderRadiusBox2>
              </RightCenterBox>

            )}

            {/* 底部数据区域 */}
            {bottomBoxData && (
              <RightBottomBox>
                <BorderRadiusBox2>
                  <div className='left-bottom'>
                    <ModuleTitle>
                      <i className='iconfont'>&#xe78f;</i>
                      <span>{bottomBoxData.title}</span>
                    </ModuleTitle>
                    {/*/!*卡片*!/*/}
                    {/*{bottomBoxData.card && (*/}
                    {/*  <BorderRadiusBox2>*/}
                    {/*    <SolitaireCard solitaireCardData={bottomBoxData.card}>*/}
                    {/*    </SolitaireCard>*/}
                    {/*  </BorderRadiusBox2>*/}
                    {/*)}*/}

                    {/* 图表 */}
                    {bottomBoxData.chart && (
                      <EchartComponent
                        echartData={bottomBoxData.chart.chartOption}></EchartComponent>
                    )}

                  </div>
                  </BorderRadiusBox2>
              </RightBottomBox>
            )}
          </RightPage>


        )}
      </>

    );
  }
}

const mapStateToProps = state => {
  return {
    resData: state.rightPageV3.data,
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
