import React, {PureComponent} from 'react';
import Chart from '../../../../utils/chart';
import {berthOperations, FeedbackOptions} from './options';
import {berthTurnoverRateOperations} from './options';
import {berthUtilizationRateOperations} from './options';
import {CapsuleChart} from "@jiaminghi/data-view-react";
import {ModuleTitle} from "../style";

class BerthOperation extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            renderer: 'canvas',
        };
    }

    render() {
        const {renderer} = this.state;
        const {inline} = this.props;
        const {identityCategory,rankingIdentityCategory} = this.props;

        const offlinePortalData = {
            "xData": [
                "2/21",
                "2/22",
                "2/23"
            ],
            "barData": [
                3,
                4,
                3
            ]
        };
        const UtilizationRateData = {
            "xData": [
                "2/21",
                "2/22",
                "2/23",
                "2/24",
                "2/25",
                "2/26",
            ],
            "barData": [
                30,
                40,
                32,
                60,
                50,
                72,
            ]
        };

        // 设置图表容器的样式，将其父标签设置为 flex 并水平排列
        const containerStyle = {
            display: 'flex',
            flexDirection: 'row', // 设置水平排列
            justifyContent: 'space-between', // 平均分配空间，将两个图表挤到两边
            gap: '0.8rem',
        };

        const chartStyle = {
            width: '5.25rem', // 添加宽度以控制图表大小
            height: '1.905rem',
        };
        const capsuleChartConfig = {
            // 单位
            unit: '单位（%）',
            showValue: false,
            data: [],
        };
        const config = {
            ...capsuleChartConfig,
            ...identityCategory,
        };

       const rankingConfig = {
            ...capsuleChartConfig,
            ...rankingIdentityCategory,
        }
        return (
            <div style={containerStyle}>
                <div>
                    <ModuleTitle>
                        <i className='iconfont'>&#xe790;</i>
                        <span>停车场周转率</span>
                    </ModuleTitle>
                    <div style={{display: 'flex'}}>
                        <div style={chartStyle}>
                            <Chart
                                renderer={renderer}
                                option={berthTurnoverRateOperations(offlinePortalData)}
                            />
                        </div>
                    </div>

                </div>
                <div>
                    <ModuleTitle>
                        <i className='iconfont'>&#xe790;</i>
                        <span>停车场周转率排行</span>
                    </ModuleTitle>
                    <div style={{display: 'flex'}}>

                        <div >
                            <CapsuleChart
                                config={rankingConfig}
                                style={chartStyle}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <ModuleTitle>
                        <i className='iconfont'>&#xe790;</i>
                        <span>停车场利用率</span>
                    </ModuleTitle>
                    <div style={{display: 'flex'}}>
                        <div style={chartStyle}>
                            <Chart
                                renderer={renderer}
                                option={berthUtilizationRateOperations(UtilizationRateData)}
                            />
                        </div>
                    </div>

                </div>

                <div>
                    <ModuleTitle>
                        <i className='iconfont'>&#xe790;</i>
                        <span>停车场占用率</span>
                    </ModuleTitle>
                    <div style={{display: 'flex'}}>
                        <div>

                            <CapsuleChart
                                config={config}
                                style={chartStyle}
                            />

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BerthOperation;
