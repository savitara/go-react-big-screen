import React, {PureComponent} from 'react';
import {LeftPage, LeftTopBox, LeftBottomBox, LeftCenterBox} from './style';
import {ModuleTitle} from '../../../style/globalStyledSet';
import {BorderBox12, BorderBox13} from '@jiaminghi/data-view-react';
import {connect} from 'dva';
import moment from 'moment';
import 'moment/locale/zh-cn';
import EchartComponent from "../../homePage/centerPage/charts/EchartComponent";
import {BorderRadiusBox2} from "../../homePage/centerPage/style";
import SolitaireCard from "../../homePage/centerPage/charts/SolitaireCard";
import {CellBox} from "./charts/CellBox";
import {SwitchBox} from "./charts/SwitchBox";


class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(), // 设置默认值为今天
        };
        this.handleChange = this.handleChange.bind(this);
    }

    async fetchDataFromBackend(selectedDate) {
        try {
            const response = await fetch(`/api/leftPageData?date=${selectedDate}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('从后端获取数据时出错:', error);
            return null;
        }
    }

    async handleChange(date, dateString) {
        // 更新组件的状态，将选择的日期赋值给startDate
        this.setState({
            startDate: date,
        });

        // 根据选择的日期，从后端API获取新数据
        const newData = await this.fetchDataFromBackend(dateString);

        // 将新数据更新到组件的状态中
        if (newData) {
            this.setState({
                // userSitua: newData.userSitua,
                trafficSitua: newData.trafficSitua,
            });
        }
    }


    render() {
        const {resData} = this.state;
        let leftPage = null
        let topBoxData = null
        let bottomBoxData = null
        let centerData = null
        if (resData) {
            leftPage = resData.leftData
            if (leftPage.top) {
                topBoxData = leftPage.top
            }
            if (leftPage.bottom) {
                bottomBoxData = leftPage.bottom
            }
            if (leftPage.center) {
                centerData = leftPage.center
            }
        }

        return (
            <>

                {leftPage && (
                    <LeftPage>
                        {/* 顶部数据区域 */}

                        {topBoxData && (
                            <LeftTopBox>
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
                            </LeftTopBox>
                        )}
                        {/*中部数据区域*/}
                        { centerData && (
                            <LeftCenterBox>
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

                                        {/* 组别单元格 */}
                                        {bottomBoxData.cell && (
                                            <CellBox
                                                cellData={bottomBoxData.cell}></CellBox>
                                        )}
                                    </div>
                                </BorderRadiusBox2>
                            </LeftCenterBox>

                        )}

                        {/* 底部数据区域 */}
                        {bottomBoxData && (
                            <LeftBottomBox>
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


                                        {/* 开关 */}
                                        {bottomBoxData.switch && (
                                            <SwitchBox
                                                switchData={bottomBoxData.switch}></SwitchBox>
                                        )}

                                    </div>
                                </BorderBox13>
                            </LeftBottomBox>
                        )}

                    </LeftPage>
                )}


            </>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        resData: state.secondPage.data,
    };
};

const mapStateToDispatch = (dispatch) => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
