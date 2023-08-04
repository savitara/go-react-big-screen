import React, {PureComponent} from 'react';
import {connect} from 'dva';

import BoxData from "./BoxData";
import {routerRedux} from "dva/router";

class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick = (item) => {
        const {dispatch} = this.props;
        dispatch(
            routerRedux.push({
                pathname:'/second',
                query: item, // 查询参数 类似于 普通路由query传参
            })
        )
    };

    render() {
        const {resData} = this.props;

        return (
            <div style={{display: 'flex', margin: '0.2rem 0.2rem 0.2rem 0'}}>
                {resData && resData.boxDataList && resData.boxDataList.map((item, index) => (
                    <div onClick={() => this.handleClick(item.id)}>
                        {/*// 将item作为参数传递给handleClick函数*/}
                        <BoxData
                            key={index}
                            title={item.title}
                            dataTableData={item.dataTableData}
                            solitaireCardData={item.solitaireCardData}
                            solitaireChartData={item.solitaireChartData}
                            dynamicChartData={item.dynamicChartData}
                        />
                    </div>


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

const mapDispatchToProps = dispatch => ({
    dispatch, // 将dispatch方法添加到props中
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
