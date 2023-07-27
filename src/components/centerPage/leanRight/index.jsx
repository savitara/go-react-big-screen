import React, {PureComponent} from 'react';
import {ModuleTitle, LeftDiv, DataBox, RightDiv} from '../style';
import {BorderBox12, BorderBox13} from '@jiaminghi/data-view-react';
import PieChart from "../charts/PieChart";

class LeanRight extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {parkingHabitsData} = this.props;

        return (

            <RightDiv>
                {parkingHabitsData && (<BorderBox12 className='top-borderBox12'>
                    <div className='top'>
                        <ModuleTitle>
                            <i className='iconfont'>&#xe78f;</i>
                            <span>停车习惯</span>
                        </ModuleTitle>

                        <div style={{margin: '0  0 0 20px'}}>
                            {/*<PieChart id="chart1" width="300px" height="5.375rem" data={paymentChannelsData} centerText="支付习惯" />*/}
                            <PieChart id="chart2" width="300px" height="5.375rem" data={parkingHabitsData.data}
                                      centerText={parkingHabitsData.title}/>
                        </div>
                    </div>
                </BorderBox12>)}
            </RightDiv>

        );
    }
}

export default LeanRight;
