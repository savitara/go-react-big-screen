import React, {PureComponent} from 'react';
import {
  LeftPage,
  LeftTopBox,
  LeftBottomBox,
  RightPage,
  RightTopBox,
  RightCenterBox,
  RightBottomBox,
  RightPageLeanRight, RightPageLeanLeft
} from './style';
import {ModuleTitle} from '../../../style/globalStyledSet';
import {connect} from 'dva';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {BorderRadiusBox2} from "../../homePage/centerPage/style";
import SolitaireCard from "../../homePage/centerPage/charts/SolitaireCard";
import EchartComponent from "../../homePage/centerPage/charts/EchartComponent";
import {LeftCenterBox} from "../../secondPage/leftPage/style";

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(), // 设置默认值为今天
    };

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
              <RightPageLeanLeft>
                {/* 顶部数据区域 */}

                {topBoxData && (
                    <RightTopBox>
                      <BorderRadiusBox2>
                        <div className='left-top'>
                          <ModuleTitle>
                            <i className='iconfont'>&#xe78f;</i>
                            <span>{topBoxData.title}</span>
                          </ModuleTitle>
                          {/*卡片*/}
                          {topBoxData.card && (
                              <BorderRadiusBox2>
                                <SolitaireCard solitaireCardData={topBoxData.card}>
                                </SolitaireCard>
                              </BorderRadiusBox2>
                          )}

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
                          {/*卡片*/}
                          {centerData.card && (
                              <BorderRadiusBox2>
                                <SolitaireCard solitaireCardData={centerData.card}>
                                </SolitaireCard>
                              </BorderRadiusBox2>
                          )}

                          {/* 图表 */}
                          {centerData.chart && (
                              <EchartComponent
                                  echartData={centerData.chart.chartOption}></EchartComponent>
                          )}

                          {/*/!* 组别单元格 *!/*/}
                          {/*{bottomBoxData.cell && (*/}
                          {/*  <CellBox*/}
                          {/*    cellData={bottomBoxData.cell}></CellBox>*/}
                          {/*)}*/}
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
                          {/*卡片*/}
                          {bottomBoxData.card && (
                              <BorderRadiusBox2>
                                <SolitaireCard solitaireCardData={bottomBoxData.card}>
                                </SolitaireCard>
                              </BorderRadiusBox2>
                          )}

                          {/* 图表 */}
                          {bottomBoxData.chart && (
                              <EchartComponent
                                  echartData={bottomBoxData.chart.chartOption}></EchartComponent>
                          )}


                          {/*/!* 开关 *!/*/}
                          {/*{bottomBoxData.switch && (*/}
                          {/*  <SwitchBox*/}
                          {/*    switchData={bottomBoxData.switch}></SwitchBox>*/}
                          {/*)}*/}

                        </div>
                      </BorderRadiusBox2>
                    </RightBottomBox>
                )}

              </RightPageLeanLeft>
          )}
          {rightPage && (
              <RightPageLeanRight>
                {/* 顶部数据区域 */}

                {topBoxData && (
                    <RightTopBox>
                      <BorderRadiusBox2>
                        <div className='left-top'>
                          <ModuleTitle>
                            <i className='iconfont'>&#xe78f;</i>
                            <span>{topBoxData.title}</span>
                          </ModuleTitle>
                          {/*卡片*/}
                          {topBoxData.card && (
                              <BorderRadiusBox2>
                                <SolitaireCard solitaireCardData={topBoxData.card}>
                                </SolitaireCard>
                              </BorderRadiusBox2>
                          )}

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
                          {/*卡片*/}
                          {centerData.card && (
                              <BorderRadiusBox2>
                                <SolitaireCard solitaireCardData={centerData.card}>
                                </SolitaireCard>
                              </BorderRadiusBox2>
                          )}

                          {/* 图表 */}
                          {centerData.chart && (
                              <EchartComponent
                                  echartData={centerData.chart.chartOption}></EchartComponent>
                          )}

                          {/*/!* 组别单元格 *!/*/}
                          {/*{bottomBoxData.cell && (*/}
                          {/*  <CellBox*/}
                          {/*    cellData={bottomBoxData.cell}></CellBox>*/}
                          {/*)}*/}
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
                          {/*卡片*/}
                          {bottomBoxData.card && (
                              <BorderRadiusBox2>
                                <SolitaireCard solitaireCardData={bottomBoxData.card}>
                                </SolitaireCard>
                              </BorderRadiusBox2>
                          )}

                          {/* 图表 */}
                          {bottomBoxData.chart && (
                              <EchartComponent
                                  echartData={bottomBoxData.chart.chartOption}></EchartComponent>
                          )}


                          {/*/!* 开关 *!/*/}
                          {/*{bottomBoxData.switch && (*/}
                          {/*  <SwitchBox*/}
                          {/*    switchData={bottomBoxData.switch}></SwitchBox>*/}
                          {/*)}*/}

                        </div>
                      </BorderRadiusBox2>
                    </RightBottomBox>
                )}

              </RightPageLeanRight>
          )}

        </>


    );
  }
}

const mapStateToProps = (state) => {
  return {
    resData: state.rightPageV3.data,
  };
};


const mapStateToDispatch = (dispatch) => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
