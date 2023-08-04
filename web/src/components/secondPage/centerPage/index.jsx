import React, {PureComponent} from 'react';
import {CenterPage, CenterBottom, CenterBottomWidth, ModuleTitle, BottomBox, LeftDiv, RightDiv, DataBox} from './style';
import {connect} from 'dva';
import LeanLeft from "./leanLeft";
import LeanRight from "./leanRight";
import LeanCenter from "./leanCenter";
import LeanBottom from "./leanBottom";

class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {


        const {resData, locationQuery} = this.state;
        console.log(locationQuery)
        let centerPage = null
        let topBoxData = null
        let bottomBoxData = null
        let centerData = null
        let rightData = null
        let leftData = null
        let bottomBoxDataList = []
        if (resData) {
            console.log(resData)

            centerPage = resData.centerData
            if (centerPage.leanTop) {
                topBoxData = centerPage.leanTop
            }
            if (centerPage.leanBottom) {
                bottomBoxData = centerPage.leanBottom
                bottomBoxDataList = bottomBoxData.list
            }
            if (centerPage.leanCenter) {
                centerData = centerPage.leanCenter
            }
            if (centerPage.leanLeft) {
                leftData = centerPage.leanLeft
            }
            if (centerPage.leanRight) {
                rightData = centerPage.leanRight
            }

        }

        return (
            <>
                {centerPage && (
                    <CenterPage>


                        <div style={{display: 'flex'}}>

                            <LeanLeft leftData={leftData}></LeanLeft>
                            <LeanCenter centerData={centerData}> </LeanCenter>

                            <LeanRight rightData={rightData}> </LeanRight>

                        </div>


                        <div style={{display: 'flex'}}>
                            {bottomBoxDataList.map((item, index) => (
                                <LeanBottom key={index} bottomBoxData={item}
                                            style={{display: 'inline-block'}}></LeanBottom>
                            ))}
                        </div>


                    </CenterPage>
                )}

            </>

        );
    }
}

const mapStateToProps = state => {
    const { data } = state.secondPage;
    const locationQuery = data && data.params ? (data.params.location || {}).query : {};

    return {
        resData: data,
        locationQuery: locationQuery,
    };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
