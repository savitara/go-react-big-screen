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
        // roofDataList: state.secondPage.roofDataList,
        // parkingHabitsData: state.secondPage.parkingHabitsData,
        // berthOperation: state.secondPage.berthOperation,
        // parkingRecord: state.secondPage.parkingRecord,
        // identityCategory: state.secondPage.identityCategory,
        // rankingIdentityCategory: state.secondPage.rankingIdentityCategory,
        // mapChartData: state.secondPage.mapChartData,
    };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
