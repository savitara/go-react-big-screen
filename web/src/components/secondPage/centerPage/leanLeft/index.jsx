import React, {PureComponent} from 'react';
import {ModuleTitle, LeftDiv, DataBox, BorderRadiusBox1} from '../style';
import {BorderBox12, BorderBox13} from '@jiaminghi/data-view-react';
import TrafficSituation from '../charts/TrafficSituation';
import {BorderRadiusBox2} from "../../../homePage/centerPage/style";
import SolitaireCard from "../../../homePage/centerPage/charts/SolitaireCard";
import EchartComponent from "../../../homePage/centerPage/charts/EchartComponent";

class LeanLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {leftData} = this.props;

        return (

            <LeftDiv>

                <div >

                    <ModuleTitle>
                        <i className='iconfont'>&#xe78f;</i>
                        <span>{leftData.title}</span>
                    </ModuleTitle>
                    {/*卡片*/}
                    {leftData.card && (
                        <BorderRadiusBox2>
                            <SolitaireCard solitaireCardData={leftData.card}>
                            </SolitaireCard>
                        </BorderRadiusBox2>
                    )}

                    {/* 图表 */}
                    {leftData.chart && (
                        <EchartComponent
                            echartData={leftData.chart.chartOption}></EchartComponent>
                    )}

                </div>
            </LeftDiv>


        );
    }
}

export default LeanLeft;
