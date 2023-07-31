import React, { PureComponent } from 'react';
import { ModuleTitle, LeftDiv, DataBox, RightDiv, BorderRadiusBox1 } from '../style';
import { BorderBox12, BorderBox13 } from '@jiaminghi/data-view-react';
import PieChart from "../charts/PieChart";
import TrafficSituation from "../charts/TrafficSituation";

class LeanRight extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { parkingHabitsData, parkingRecord } = this.props;

        return (

            <RightDiv>
                {parkingHabitsData && (
                    <div>

                        
                        {/* <BorderBox12 className='top-borderBox12'>
                            <div style={{height:'3rem'}}>

                                <ModuleTitle>
                                    <i className='iconfont'>&#xe78f;</i>
                                    <span>停车记录(每月)</span>
                                </ModuleTitle>
                                <TrafficSituation trafficSitua={parkingRecord}></TrafficSituation>
                                <div className='top'>
                                    <ModuleTitle>
                                        <i className='iconfont'>&#xe78f;</i>
                                        <span>停车习惯</span>
                                    </ModuleTitle>

                                    <div style={{margin: '0  0 0 20px'}}>
                                        <PieChart id="chart2"
                                                  data={parkingHabitsData.data}
                                                  centerText={parkingHabitsData.title}/>
                                    </div>
                                </div>
                            </div>


                        </BorderBox12> */}
                        <BorderRadiusBox1>
                            <div>

                                <ModuleTitle>
                                    <i className='iconfont'>&#xe78f;</i>
                                    <span>停车记录(每月)</span>
                                </ModuleTitle>
                                <TrafficSituation trafficSitua={parkingRecord}></TrafficSituation>
                               
                            </div>
                            <div className='top'>
                                    <ModuleTitle>
                                        <i className='iconfont'>&#xe78f;</i>
                                        <span>停车习惯</span>
                                    </ModuleTitle>
                                    <div style={{ margin: '10px 0 0 20px' ,top:'20px'}}>
                                        <PieChart id="chart2"
                                            data={parkingHabitsData.data}
                                            centerText={parkingHabitsData.title} />
                                    </div>
                              
                                </div>

                        </BorderRadiusBox1>
                    </div>

                )}
            </RightDiv>

        );
    }
}

export default LeanRight;
