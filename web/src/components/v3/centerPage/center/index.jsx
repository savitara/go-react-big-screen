import React, {PureComponent} from 'react';
import {ModuleTitle, LeftDiv, DataBox, BorderRadiusBox1, CenterDiv} from '../style';
import EchartComponent from "../../../homePage/centerPage/charts/EchartComponent";
import Chart from "../../../../utils/chart";
import AaLiMap from "../charts/AaLiMap";

class LeanLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {dataCenter} = this.props;
        let option = null;
        let chartContainerStyle = null;
        let chartStyle = null;
        if (dataCenter) {
            option = dataCenter.chart.chartOption.option
            chartContainerStyle = dataCenter.chart.chartOption.chartContainerStyle
            chartStyle = dataCenter.chart.chartOption.chartStyle
        }
        return (

            <CenterDiv>

                <BorderRadiusBox1>
                    {option && (
                        <div style={chartContainerStyle}>
                            <div style={chartStyle}>
                                <AaLiMap  option={option}/>
                            </div>
                        </div>
                    )}

                </BorderRadiusBox1>
            </CenterDiv>


        );
    }
}

export default LeanLeft;
