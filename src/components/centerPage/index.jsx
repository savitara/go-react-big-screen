import React, {PureComponent} from 'react';
import {CenterPage, CenterBottom, CenterBottomWidth, ModuleTitle, BottomBox, LeftDiv, RightDiv, DataBox} from './style';
import Map from './charts/Map';
import {connect} from 'dva';
import OfflinePortal from './charts/OfflinePortal';
import Feedback from './charts/Feedback';
import {BorderBox12, BorderBox13} from '@jiaminghi/data-view-react';
import TrafficSituation from './charts/TrafficSituation';
import PieChart from './charts/PieChart'; //
import BerthOperation from './charts/BerthOperation'; //
// import MapChart from '../mapChart';
import MapChart from "./charts/MapChart"; //
class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {berthOperation, roofDataList, parkingRecord, parkingHabitsData} = this.props;

        const paymentChannelsData = [
            {value: 335, name: '微信支付'},
            {value: 310, name: '支付宝支付'},
            {value: 234, name: '云闪付'},
        ];
        const mapData = [
            {value: [107.38, 23.19, 120]},
            {value: [111, 37.86, 1140]},
            {value: [121, 36.86, 114]},
            {value: [116.37, 23.19, 120]},
            // Add more data points as needed
        ];
        return (
            <CenterPage>
                <div style={{display: 'flex'}}>
                    <LeftDiv>

                        <BorderBox12 className='left-top-borderBox12'>
                            <div className='left-top'>
                                <ModuleTitle>
                                    <i className='iconfont'>&#xe78f;</i>
                                    <span>停车记录(每月)</span>
                                </ModuleTitle>
                                <TrafficSituation trafficSitua={parkingRecord}></TrafficSituation>
                                <ModuleTitle>
                                    <i className='iconfont'>&#xe78f;</i>
                                    <span>路段实时视频</span>
                                </ModuleTitle>
                                <DataBox>
                                    <div className='detail-list'>
                                        {roofDataList && roofDataList.map((item, index) => (
                                            <div className='detail-list-item' key={index}>
                                                <img
                                                    src={require(`../../assets/images/center-details-data${index + 1}.png`)}
                                                    alt={item.title}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </DataBox>

                            </div>
                        </BorderBox12>
                    </LeftDiv>
                    <MapChart
                        style={{
                            display: 'inline-block', // 添加此样式以使组件并排显示
                        }}
                        id="MapId" // You can provide a unique id for the map container
                        mapData={mapData} // Pass the map data to the Map component
                    />
                    {parkingHabitsData && (<RightDiv>
                        <BorderBox12 className='top-borderBox12'>
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
                        </BorderBox12>
                    </RightDiv>)}
                </div>

                <CenterBottomWidth>
                    <div className='detail-list'>
                        <>
                            <div className='detail-list-item' key={index}>
                                <ModuleTitle>
                                    <i className='iconfont'>&#xe790;</i>
                                    <span>泊位运营</span>
                                </ModuleTitle>
                                <div className='offline-portal-box'>
                                    {berthOperation ? (
                                        <>
                                            <div style={{display: 'flex'}}>
                                                <BerthOperation inline={true}/>
                                            </div>
                                        </>
                                    ) : (
                                        ''
                                    )}
                                </div>

                            </div>

                        </>
                    </div>
                </CenterBottomWidth>

            </CenterPage>
        );
    }
}

const mapStateToProps = state => {
    return {
        roofDataList: state.centerPage.roofDataList,
        parkingHabitsData: state.centerPage.parkingHabitsData,
        berthOperation: state.centerPage.berthOperation,
        parkingRecord: state.centerPage.parkingRecord
    };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
