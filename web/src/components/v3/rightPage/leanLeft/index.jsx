import React, {PureComponent} from 'react';
import {
    ModuleTitle,
    LeftDiv,
    DataBox,
    BorderRadiusBox1,
    CenterPageLeanRight,
    RightTopBox,
    RightCenterBox, RightBottomBox
} from '../style';
import {Select} from "antd";
import {RightDiv} from "../../centerPage/style";
import {BorderRadiusBox2} from "../../../homePage/centerPage/style";
import EchartComponent from "../../../homePage/centerPage/charts/EchartComponent";
import {LeftBottomBox} from "../../leftPage/style";
import SolitaireCard from "../../../homePage/centerPage/charts/SolitaireCard";

class RightPageLeanLeftComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            videoDisplayRows: 6, // 默认设置为6行
        };
    }

    render() {
        const {leanLeftData} = this.props;


        let topBoxData = null
        let bottomBoxData = null
        let centerData = null
        let bottomBoxDataPlus = null
        if (leanLeftData) {
            if (leanLeftData.top) {
                topBoxData = leanLeftData.top
            }
            if (leanLeftData.bottom) {
                bottomBoxData = leanLeftData.bottom
            }
            if (leanLeftData.center) {
                centerData = leanLeftData.center
            }
            if (leanLeftData.bottomPlus) {
                bottomBoxDataPlus = leanLeftData.bottomPlus
            }
        }



        return (

            <>
                {leanLeftData && (
                    <div>
                        {/* 顶部数据区域 */}

                        {topBoxData && (
                            <BorderRadiusBox2>
                                <div className='left-top'>
                                    <ModuleTitle>
                                        <i className='iconfont'>&#xe78f;</i>
                                        <span>{topBoxData.title}</span>
                                    </ModuleTitle>
                                    {/* 图表 */}
                                    {topBoxData.chart && (
                                        <EchartComponent
                                            echartData={topBoxData.chart.chartOption}></EchartComponent>
                                    )}
                                </div>
                            </BorderRadiusBox2>
                        )}
                        {/*中部数据区域*/}
                        {centerData && (
                            <BorderRadiusBox2>
                                <div>
                                    <ModuleTitle>
                                        <i className='iconfont'>&#xe78f;</i>
                                        <span>{centerData.title}</span>
                                    </ModuleTitle>

                                    {/* 图表 */}
                                    {centerData.chart && (
                                        <EchartComponent
                                            echartData={centerData.chart.chartOption}></EchartComponent>
                                    )}


                                </div>
                            </BorderRadiusBox2>

                        )}

                        {/* 底部数据区域 */}
                        {bottomBoxData && (
                            <BorderRadiusBox2>
                                <div className='left-bottom'>
                                    <ModuleTitle>
                                        <i className='iconfont'>&#xe78f;</i>
                                        <span>{bottomBoxData.title}</span>
                                    </ModuleTitle>


                                    {/* 图表 */}
                                    {bottomBoxData.chart && (
                                        <EchartComponent
                                            echartData={bottomBoxData.chart.chartOption}></EchartComponent>
                                    )}


                                </div>
                            </BorderRadiusBox2>

                        )}

                        {/* 底部数据区域+1 */}
                        {bottomBoxDataPlus && (

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


                                </div>
                            </BorderRadiusBox2>

                        )}

                    </div>
                )}

            </>

        );
    }
}


export default RightPageLeanLeftComponent;
