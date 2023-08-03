import React, {PureComponent} from "react";
import {Space, Table, Tag} from 'antd';
import {DataTableDiv, SolitaireChartDiv} from "../style";
import PieChart from "../../../centerPage/charts/PieChart";
import EchartComponent from "./EchartComponent";

class SolitaireChart extends PureComponent {
    render() {

        const {solitaireChartData} = this.props;
        const chartOption = solitaireChartData.chartOption
        const chartTitle = solitaireChartData.title
        return (
            <>
                <SolitaireChartDiv>
                    <h3 style={{color: '#ffffff'}}>{chartTitle}</h3>
                    {chartOption && (
                            <EchartComponent echartData={chartOption}></EchartComponent>

                    )}
                </SolitaireChartDiv>

            </>
        );
    }
}

export default SolitaireChart;
