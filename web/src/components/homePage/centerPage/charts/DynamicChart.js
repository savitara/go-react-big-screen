import React, {PureComponent} from "react";
import {DataTableDiv, SolitaireChartDiv} from "../style";
import EchartComponent from "./EchartComponent";

class DynamicChart extends PureComponent {
    render() {

        const {dynamicChartData} = this.props;
        const chartType = dynamicChartData.type
        const chartOption = dynamicChartData.chartOption
        const chartTitle = dynamicChartData.title
        return (
            <>
                <SolitaireChartDiv>
                    <div>
                        <EchartComponent echartData={chartOption}></EchartComponent>
                    </div>
                </SolitaireChartDiv>

            </>
        );
    }

}

export default DynamicChart;
