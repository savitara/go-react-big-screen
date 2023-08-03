import React, {PureComponent} from 'react';
import {connect} from 'dva';

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
            <div style={{display: 'flex', margin: '0.2rem 0.2rem 0.2rem 0'}}> {/* 使用 display: flex 将其设置为横向排列的容器 */}
                {resData && resData.boxDataList && resData.boxDataList.map((item, index) => (
                    <BoxData
                        key={index}
                        title={item.title}
                        dataTableData={item.dataTableData}
                        solitaireCardData={item.solitaireCardData}
                        solitaireChartData={item.solitaireChartData}
                        dynamicChartData={item.dynamicChartData}
                    />
                ))}
            </div>

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
