import React, { PureComponent } from 'react';
import { ModuleTitle, LeftDiv, DataBox, RightDiv, BorderRadiusBox1 } from '../style';
import { BorderBox12, BorderBox13 } from '@jiaminghi/data-view-react';
import PieChart from "../charts/PieChart";
import TrafficSituation from "../charts/TrafficSituation";
import MapChart from "../charts/MapChart";

class LeanCenter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { centerData } = this.props;

        return (

         <>

             <MapChart
                 style={{
                     display: 'inline-block', // 添加此样式以使组件并排显示
                 }}
                 id="MapId"
                 mapChartData={centerData.mapChartData}
             />
         </>

        );
    }
}

export default LeanCenter;
