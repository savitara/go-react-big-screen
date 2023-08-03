import React, { PureComponent } from 'react';
import { ModuleTitle, LeftDiv, DataBox, RightDiv, BorderRadiusBox1 } from '../style';
import { BorderBox12, BorderBox13 } from '@jiaminghi/data-view-react';
import PieChart from "../charts/PieChart";
import TrafficSituation from "../charts/TrafficSituation";
import {BorderRadiusBox2} from "../../../homePage/centerPage/style";
import SolitaireCard from "../../../homePage/centerPage/charts/SolitaireCard";
import EchartComponent from "../../../homePage/centerPage/charts/EchartComponent";

class LeanBottom extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { bottomBoxData } = this.props;

        return (

           <>

               <div >

                   <ModuleTitle>
                       <i className='iconfont'>&#xe78f;</i>
                       <span>{bottomBoxData.title}</span>
                   </ModuleTitle>
                   {/*卡片*/}
                   {bottomBoxData.card && (
                       <BorderRadiusBox2>
                           <SolitaireCard solitaireCardData={bottomBoxData.card}>
                           </SolitaireCard>
                       </BorderRadiusBox2>
                   )}

                   {/* 图表 */}
                   {bottomBoxData.chart && (
                       <EchartComponent
                           echartData={bottomBoxData.chart.chartOption}></EchartComponent>
                   )}

               </div>
           </>

        );
    }
}

export default LeanBottom;
