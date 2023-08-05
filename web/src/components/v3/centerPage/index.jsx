import React, {PureComponent} from 'react';
import {CenterPage, CenterBottom, CenterBottomWidth, ModuleTitle, BottomBox, LeftDiv, RightDiv, DataBox} from './style';
import {connect} from 'dva';
import BerthOperation from './charts/BerthOperation'; //
// import MapChart from '../mapChart';
import MapChart from "./charts/MapChart"; //
import LeanLeft from "./leanLeft";
import LeanRight from "./leanRight";
import Center from "./center";
import AaLiMap from "./charts/AaLiMap";

class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {resData} = this.props;
        let centerData = null
        let LeanLeftData = null
        let LeanRightData = null
        let dataCenter = null
        if (resData) {
            centerData = resData.centerData
            LeanLeftData = centerData.leanLeftData
            LeanRightData = centerData.leanRightData
            dataCenter = centerData.dataCenter
        }


        return (
            <>
                {centerData && (<CenterPage>
                        <div style={{display: 'flex'}}>

                            <LeanLeft LeanLeftData={LeanLeftData}></LeanLeft>


                            <Center dataCenter={dataCenter}> </Center>
                            <LeanRight LeanRightData={LeanRightData}> </LeanRight>

                        </div>

                        {/*<CenterBottomWidth>*/}
                        {/*    <div className='detail-list'>*/}
                        {/*        <>*/}
                        {/*            <div className='detail-list-item' key={index}>*/}

                        {/*                <div className='offline-portal-box'>*/}
                        {/*                    {berthOperation ? (*/}
                        {/*                        <>*/}
                        {/*                            <div style={{display: 'flex'}}>*/}
                        {/*                                <BerthOperation inline={true}*/}
                        {/*                                                identityCategory={identityCategory}*/}
                        {/*                                                rankingIdentityCategory={rankingIdentityCategory}/>*/}
                        {/*                            </div>*/}
                        {/*                        </>*/}
                        {/*                    ) : (*/}
                        {/*                        ''*/}
                        {/*                    )}*/}
                        {/*                </div>*/}


                        {/*            </div>*/}

                        {/*        </>*/}
                        {/*    </div>*/}
                        {/*</CenterBottomWidth>*/}

                    </CenterPage>
                )}
            </>

        );
    }
}

const mapStateToProps = state => {
    return {
        resData: state.centerPageV3.data,
    };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
