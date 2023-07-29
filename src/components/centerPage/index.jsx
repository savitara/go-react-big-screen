import React, {PureComponent} from 'react';
import {CenterPage, CenterBottom, CenterBottomWidth, ModuleTitle, BottomBox, LeftDiv, RightDiv, DataBox} from './style';
import {connect} from 'dva';
import BerthOperation from './charts/BerthOperation'; //
// import MapChart from '../mapChart';
import MapChart from "./charts/MapChart"; //
import LeanLeft from "./leanLeft";
import LeanRight from "./leanRight";
import AaLiMap from "./charts/AaLiMap";

class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            berthOperation,
            roofDataList,
            parkingRecord,
            parkingHabitsData,
            identityCategory,
            rankingIdentityCategory,
            mapChartData
        } = this.props;

        // const mapData = [
        //     {value: [107.38, 23.19, 120]},
        //     {value: [111, 37.86, 1140]},
        //     {value: [121, 36.86, 114]},
        //     {value: [116.37, 23.19, 120]},
        // ];

        return (
            <>
                {mapChartData && (<CenterPage>
                        <div style={{display: 'flex'}}>

                            <LeanLeft roofDataList={roofDataList}></LeanLeft>

                            <MapChart
                                style={{
                                    display: 'inline-block', // 添加此样式以使组件并排显示
                                }}
                                id="MapId" // You can provide a unique id for the map container
                                // mapData={mapData} // Pass the map data to the Map component
                                mapChartData={mapChartData}
                            />
                            <LeanRight parkingHabitsData={parkingHabitsData} parkingRecord={parkingRecord}> </LeanRight>

                        </div>

                        <CenterBottomWidth>
                            <div className='detail-list'>
                                <>
                                    <div className='detail-list-item' key={index}>

                                        <div className='offline-portal-box'>
                                            {berthOperation ? (
                                                <>
                                                    <div style={{display: 'flex'}}>
                                                        <BerthOperation inline={true}
                                                                        identityCategory={identityCategory}
                                                                        rankingIdentityCategory={rankingIdentityCategory}/>
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
                )}
            </>

        );
    }
}

const mapStateToProps = state => {
    return {
        roofDataList: state.centerPage.roofDataList,
        parkingHabitsData: state.centerPage.parkingHabitsData,
        berthOperation: state.centerPage.berthOperation,
        parkingRecord: state.centerPage.parkingRecord,
        identityCategory: state.centerPage.identityCategory,
        rankingIdentityCategory: state.centerPage.rankingIdentityCategory,
        mapChartData: state.centerPage.mapChartData,
    };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
