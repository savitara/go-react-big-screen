import React, {PureComponent} from "react";
import {Space, Table, Tag} from 'antd';
import {DataTableDiv, SolitaireChartDiv} from "../style";
import PieChart from "../../../centerPage/charts/PieChart";
import EchartComponent from "./EchartComponent";

class SolitaireChart extends PureComponent {
    render() {
        const parkingHabitsData = {
            "title": "停车时长分布",
            "data": [
                {
                    "value": 335,
                    "name": "1到60分钟"
                },
                {
                    "value": 234,
                    "name": "1到12小时"
                },
                {
                    "value": 310,
                    "name": "12到24小时"
                },
                {
                    "value": 160,
                    "name": "24小时以上"
                },
                {
                    "value": 100,
                    "name": "48小时以上"
                }
            ]
        }
        const {solitaireChartData} = this.props;
        const chartType = solitaireChartData.type
        const chartOption = solitaireChartData.chartOption
        const chartTitle = solitaireChartData.title
        return (
            <>
                <SolitaireChartDiv>

                    {/*<div>*/}
                    {/*    <PieChart id="chart2"*/}
                    {/*              data={parkingHabitsData.data}*/}
                    {/*              centerText={parkingHabitsData.title}/>*/}
                    {/*</div>*/}
                    { chartOption && (
                        <EchartComponent echartData={chartOption}></EchartComponent>
                    )}
                </SolitaireChartDiv>

            </>
        );
    }
}

export default SolitaireChart;
