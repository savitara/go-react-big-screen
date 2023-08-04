import React, {PureComponent} from "react";
import {DataTableDiv, SolitaireChartDiv} from "../style";
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
