import React, { PureComponent } from 'react';
import { ModuleTitle, LeftDiv, DataBox, RightDiv, BorderRadiusBox1 } from '../style';
import { BorderBox12, BorderBox13 } from '@jiaminghi/data-view-react';
import PieChart from "../charts/PieChart";
import TrafficSituation from "../charts/TrafficSituation";
import {BorderRadiusBox2} from "../../../homePage/centerPage/style";
import SolitaireCard from "../../../homePage/centerPage/charts/SolitaireCard";
import EchartComponent from "../../../homePage/centerPage/charts/EchartComponent";

class LeanRight extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {  rightData } = this.props;

        return (

            <RightDiv>

                <div >

                    <ModuleTitle>
                        <i className='iconfont'>&#xe78f;</i>
                        <span>{rightData.title}</span>
                    </ModuleTitle>
                    {/*卡片*/}
                    {rightData.card && (
                        <BorderRadiusBox2>
                            <SolitaireCard solitaireCardData={rightData.card}>
                            </SolitaireCard>
                        </BorderRadiusBox2>
                    )}

                    {/* 图表 */}
                    {rightData.chart && (
                        <EchartComponent
                            echartData={rightData.chart.chartOption}></EchartComponent>
                    )}

                </div>
            </RightDiv>

        );
    }
}

export default LeanRight;
