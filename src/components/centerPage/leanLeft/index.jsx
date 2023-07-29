import React, {PureComponent} from 'react';
import {ModuleTitle,  LeftDiv,  DataBox} from '../style';
import {BorderBox12, BorderBox13} from '@jiaminghi/data-view-react';
import TrafficSituation from '../charts/TrafficSituation';
class LeanLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { roofDataList } = this.props;

        return (

                    <LeftDiv>

                        <BorderBox12 className='left-top-borderBox12'  style={{ marginLeft: 0 }}>
                            <div className='left-top'>
                                <ModuleTitle>
                                    <i className='iconfont'>&#xe78f;</i>
                                    <span>路段实时视频</span>
                                </ModuleTitle>
                                <DataBox>
                                    {/*<div className='detail-list'>*/}
                                    {/*    {roofDataList && roofDataList.map((item, index) => (*/}
                                    {/*        <div className='detail-list-item' key={index}>*/}
                                    {/*            <img*/}
                                    {/*                src={require(`../../../assets/images/center-details-data${index + 1}.png`)}*/}
                                    {/*                alt={item.title}*/}
                                    {/*            />*/}
                                    {/*        </div>*/}
                                    {/*    ))}*/}
                                    {/*</div>*/}
                                </DataBox>

                            </div>
                        </BorderBox12>
                    </LeftDiv>




        );
    }
}

export default LeanLeft;
