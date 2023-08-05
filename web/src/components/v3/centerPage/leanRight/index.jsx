import React, { PureComponent } from 'react';
import { ModuleTitle, LeftDiv, DataBox, RightDiv, BorderRadiusBox1 } from '../style';
import { BorderBox12, BorderBox13 } from '@jiaminghi/data-view-react';
import PieChart from "../charts/PieChart";
import TrafficSituation from "../charts/TrafficSituation";
import {CenterPageLeanRight, RightBottomBox, RightCenterBox, RightPage, RightTopBox} from "../../rightPage/style";
import {BorderRadiusBox2} from "../../../homePage/centerPage/style";
import SolitaireCard from "../../../homePage/centerPage/charts/SolitaireCard";
import EchartComponent from "../../../homePage/centerPage/charts/EchartComponent";
import {LeftBottomBox} from "../../leftPage/style";

class LeanRight extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { LeanRightData } = this.props;


        let topBoxData = null
        let bottomBoxData = null
        let centerData = null
        let bottomBoxDataPlus = null
        if (LeanRightData) {
            if (LeanRightData.top) {
                topBoxData = LeanRightData.top
            }
            if (LeanRightData.bottom) {
                bottomBoxData = LeanRightData.bottom
            }
            if (LeanRightData.center) {
                centerData = LeanRightData.center
            }
            if(LeanRightData.bottomPlus){
                bottomBoxDataPlus = LeanRightData.bottomPlus
            }
        }

        return (

            <RightDiv>
                {LeanRightData && (
                    <CenterPageLeanRight>
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
                                        {/*    <BorderRadiusBox2>*/}
                                        {/*        <SolitaireCard solitaireCardData={topBoxData.card}>*/}
                                        {/*        </SolitaireCard>*/}
                                        {/*    </BorderRadiusBox2>*/}
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
                                        {/*    <BorderRadiusBox2>*/}
                                        {/*        <SolitaireCard solitaireCardData={centerData.card}>*/}
                                        {/*        </SolitaireCard>*/}
                                        {/*    </BorderRadiusBox2>*/}
                                        {/*)}*/}

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
                                        {/*/!*卡片*!/*/}
                                        {/*{bottomBoxData.card && (*/}
                                        {/*    <BorderRadiusBox2>*/}
                                        {/*        <SolitaireCard solitaireCardData={bottomBoxData.card}>*/}
                                        {/*        </SolitaireCard>*/}
                                        {/*    </BorderRadiusBox2>*/}
                                        {/*)}*/}

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

                        {/* 底部数据区域+1 */}
                        {bottomBoxDataPlus && (
                            <LeftBottomBox>
                                <BorderRadiusBox2>
                                    <div className='left-bottom'>
                                        <ModuleTitle>
                                            <i className='iconfont'>&#xe78f;</i>
                                            <span>{bottomBoxDataPlus.title}</span>
                                        </ModuleTitle>
                                        {/*卡片*/}
                                        {bottomBoxDataPlus.card && (
                                            <BorderRadiusBox2>
                                                <SolitaireCard solitaireCardData={bottomBoxDataPlus.card}>
                                                </SolitaireCard>
                                            </BorderRadiusBox2>
                                        )}

                                        {/* 图表 */}
                                        {bottomBoxDataPlus.chart && (
                                            <EchartComponent
                                                echartData={bottomBoxDataPlus.chart.chartOption}></EchartComponent>
                                        )}


                                        {/*/!* 开关 *!/*/}
                                        {/*{bottomBoxData.switch && (*/}
                                        {/*  <SwitchBox*/}
                                        {/*    switchData={bottomBoxData.switch}></SwitchBox>*/}
                                        {/*)}*/}

                                    </div>
                                </BorderRadiusBox2>
                            </LeftBottomBox>
                        )}

                    </CenterPageLeanRight>
                )}

            </RightDiv>

        );
    }
}

export default LeanRight;
