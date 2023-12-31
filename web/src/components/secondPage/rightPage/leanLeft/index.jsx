import React, {PureComponent} from 'react';
import {
    ModuleTitle,
    LeftDiv,
    DataBox,
    RightDiv,
    BorderRadiusBox1,
    RightPage,
    RightTopBox,
    RightCenterBox, RightBottomBox
} from '../style';
import {BorderBox12, BorderBox13} from '@jiaminghi/data-view-react';
import PieChart from "../charts/PieChart";
import TrafficSituation from "../charts/TrafficSituation";
import {BorderRadiusBox2} from "../../../homePage/centerPage/style";
import SolitaireCard from "../../../homePage/centerPage/charts/SolitaireCard";
import EchartComponent from "../../../homePage/centerPage/charts/EchartComponent";

class RightPageLeanLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {leanLeftData} = this.props;
        const topBoxData = leanLeftData.topData
        const bottomBoxData = leanLeftData.bottomData
        const centerData = leanLeftData.centerData

        return (

            <>
                <RightPage>
                    {/* 顶部数据区域 */}

                    {topBoxData && (
                        <RightTopBox>
                            <BorderBox12 className='left-top-borderBox12'>
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
                            </BorderBox12>
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
                                </div>
                            </BorderRadiusBox2>
                        </RightCenterBox>

                    )}

                    {/* 底部数据区域 */}
                    {bottomBoxData && (
                        <RightBottomBox>
                            <BorderBox13 className='left-bottom-borderBox13'>
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

                                </div>
                            </BorderBox13>
                        </RightBottomBox>
                    )}
                </RightPage>


            </>

        );
    }

}

export default RightPageLeanLeft;
