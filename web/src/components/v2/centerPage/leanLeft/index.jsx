import React, {PureComponent} from 'react';
import {ModuleTitle, LeftDiv, DataBox, BorderRadiusBox1} from '../style';
import {BorderBox12, BorderBox13} from '@jiaminghi/data-view-react';
import TrafficSituation from '../charts/TrafficSituation';
import {WaterLevelPond} from "@jiaminghi/data-view-react";
import {LiquidBall} from '@jiaminghi/data-view-react';
import EchartComponent from "../../../homePage/centerPage/charts/EchartComponent";

class LeanLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {roofDataList} = this.props;
        const config = {
            data: [55],
            shape: 'round'
        }
        // 堆叠的柱状图配置
        const chartOption = {
            "chartContainerStyle": {
                width: "3.65rem",
                height: "1.55rem",
                position: "relative",
                overflow: "hidden"
            },
            chartStyle: {
                position: "absolute",
                top: "-0.1rem",
                left: "0",
                right: "0",
                bottom: "0"
            },
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [

                    {
                        name: 'Email',
                        type: 'bar',
                        stack: 'Ad',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Union Ads',
                        type: 'bar',
                        stack: 'Ad',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'Video Ads',
                        type: 'bar',
                        stack: 'Ad',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },


                ]
            }

        }
        return (

            <LeftDiv>

                {/*<BorderBox12 className='left-top-borderBox12'  style={{ marginLeft: 0 }}>*/}
                {/*    <div className='left-top'>*/}
                {/*        <ModuleTitle>*/}
                {/*            <i className='iconfont'>&#xe78f;</i>*/}
                {/*            <span>路段实时视频</span>*/}
                {/*        </ModuleTitle>*/}
                {/*        <DataBox>*/}
                {/*            /!*<div className='detail-list'>*!/*/}
                {/*            /!*    {roofDataList && roofDataList.map((item, index) => (*!/*/}
                {/*            /!*        <div className='detail-list-item' key={index}>*!/*/}
                {/*            /!*            <img*!/*/}
                {/*            /!*                src={require(`../../../assets/images/center-details-data${index + 1}.png`)}*!/*/}
                {/*            /!*                alt={item.title}*!/*/}
                {/*            /!*            />*!/*/}
                {/*            /!*        </div>*!/*/}
                {/*            /!*    ))}*!/*/}
                {/*            /!*</div>*!/*/}
                {/*        </DataBox>*/}

                {/*    </div>*/}
                {/*</BorderBox12>*/}
                <BorderRadiusBox1>
                    <div style={{width: '5rem'}}>
                        <ModuleTitle>
                            <i className='iconfont'>&#xe78f;</i>
                            <span>路段实时视频</span>
                        </ModuleTitle>
                        <div>
                            {/*<WaterLevelPond config={config} style={{width: '150px', height: '200px'}}/>*/}
                            <EchartComponent echartData={chartOption}></EchartComponent>
                        </div>
                    </div>

                </BorderRadiusBox1>
            </LeftDiv>


        );
    }
}

export default LeanLeft;
