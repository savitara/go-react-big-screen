import React, {PureComponent} from 'react';
import {CenterPage, CenterBottom, CenterBottomWidth, ModuleTitle, BottomBox, LeftDiv, RightDiv, DataBox} from './style';
import {connect} from 'dva';
import BerthOperation from './charts/BerthOperation'; //
// import MapChart from '../mapChart';
import MapChart from "./charts/MapChart"; //
import LeanLeft from "./leanLeft";
import LeanRight from "./leanRight";
import AaLiMap from "./charts/AaLiMap";
import BoxData from "./BoxData";

class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            resData,
        } = this.props;
        console.log(resData)
        return (
            <>
                {resData && resData.boxDataList &&  resData.boxDataList.map((item, index) => (
                    <BoxData key={index} title={item.title} dataTableData={item.dataTableData}  solitaireCardData={item.solitaireCardData}
                             solitaireChartData={item.solitaireChartData} dynamicChartData={item.dynamicChartData}
                    />
                ))}
            </>

        );
    }
}

const mapStateToProps = state => {
    return {
        resData: state.homePage.data,
    };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
