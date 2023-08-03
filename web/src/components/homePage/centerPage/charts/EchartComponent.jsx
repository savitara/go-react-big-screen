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

        const chartContainerStyle = echartData.chartContainerStyle
        const chartStyle = echartData.chartStyle
        const option = echartData.option

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
