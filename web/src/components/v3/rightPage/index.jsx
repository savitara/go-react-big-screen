import React, {PureComponent} from 'react';
import {
    LeftPage,
    LeftTopBox,
    LeftBottomBox,
    RightPage,
    RightTopBox,
    RightCenterBox,
    RightBottomBox,
    RightPageLeanRight, RightPageLeanLeft
} from './style';
import {ModuleTitle} from '../../../style/globalStyledSet';
import {connect} from 'dva';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {BorderRadiusBox2} from "../../homePage/centerPage/style";
import SolitaireCard from "../../homePage/centerPage/charts/SolitaireCard";
import EchartComponent from "../../homePage/centerPage/charts/EchartComponent";
import {LeftCenterBox} from "../../secondPage/leftPage/style";
import LeanLeft from "../centerPage/leanLeft";
import Center from "../centerPage/center";
import LeanRight from "../centerPage/leanRight";
import RightPageLeanCenter from "./leanCenter";
import RightPageLeanRightComponent from "./leanRight";
import RightPageLeanLeftComponent from "./leanLeft";
import RightPageLeanCenterComponent from "./leanCenter";

class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(), // 设置默认值为今天
        };

    }


    render() {
        const {resData} = this.props;
        let leanCenterData = null
        let leanLeftData = null
        let leanRightData = null
        if (resData) {
            let rightData = resData.rightData
            leanLeftData = rightData.leanLeftData
            leanCenterData = rightData.leanCenterData
            leanRightData = rightData.leanRightData
        }


        return (
            <>
                <RightPage>
                    <div style={{display: 'flex'}}>

                        {leanLeftData &&
                            (
                                <RightPageLeanLeftComponent leanLeftData={leanLeftData}></RightPageLeanLeftComponent>
                            )
                        }
                        {leanCenterData &&
                            (
                                <RightPageLeanCenterComponent
                                    leanCenterData={leanCenterData}></RightPageLeanCenterComponent>
                            )
                        }

                        {
                            leanRightData &&
                            (
                                <RightPageLeanRightComponent
                                    leanRightData={leanRightData}></RightPageLeanRightComponent>
                            )
                        }
                    </div>
                </RightPage>
            </>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        resData: state.rightPageV3.data,
    };
};


const mapStateToDispatch = (dispatch) => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
