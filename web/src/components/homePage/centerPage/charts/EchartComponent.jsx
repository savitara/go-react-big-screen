import React, {PureComponent} from 'react';
import Chart from '../../../../utils/chart';


class EchartComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            renderer: 'canvas',
        };
    }

    render() {
        const {echartData} = this.props;
        const {renderer} = this.state; // 获取 renderer 的值

        let chartContainerStyle = {}
        let chartStyle = {}
        let option = null
        if (echartData) {
            if (echartData.chartContainerStyle) {
                chartContainerStyle = echartData.chartContainerStyle
            }
            if (echartData.chartStyle) {
                chartStyle = echartData.chartStyle
            }
            if (echartData.option) {
                option = echartData.option
            }

        }

        return (
            <>
                {option && (
                    <div style={chartContainerStyle}>
                        <div style={chartStyle}>
                            <Chart renderer={renderer} option={option}/>
                        </div>
                    </div>
                )}
            </>


        );
    }
}

export default EchartComponent;
