import React, {PureComponent, Fragment} from 'react';
import {formatTime} from '../../../utils';
import {
    Decoration10,
    Decoration8,
    Decoration6,
} from '@jiaminghi/data-view-react';

import {TopBox, TimeBox, TopCenter} from './style';
import {connect} from "dva";
import {Button, Tooltip} from "antd";
import {LeftCircleOutlined} from '@ant-design/icons';
import {routerRedux} from "dva/router";
import {getSecondPageDataByParams} from "../../../services";

class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // title: '大数据可视化平台',
            timeStr: '',
            weekday: [
                '星期天',
                '星期一',
                '星期二',
                '星期三',
                '星期四',
                '星期五',
                '星期六',
            ],
        };
    }

    // 设置时间
    componentDidMount() {
        this.setTimingFn();
        this.getSecondPageData();
    }

    getSecondPageData() {
        const { locationQuery} = this.state;
        getSecondPageDataByParams(locationQuery).then(res => {
            if (res) {
                console.log(res)
            }


        })
    }

    setTimingFn() {
        this.timing = setInterval(() => {
            let dateYear = formatTime(new Date(), 'yyyy-MM-dd');
            let dateDay = formatTime(new Date(), 'HH: mm: ss');
            let dateWeek = this.state.weekday[new Date().getDay()];
            this.setState({
                timeStr: `${dateYear} | ${dateDay} ${dateWeek}`,
            });
        }, 1000);
    }

    handleClick = () => {
        const {dispatch} = this.props;
        dispatch(
            routerRedux.push({
                pathname: '/'
            })
        )
    };

    render() {
        // const { title } = this.state;
        const {resData, queryData} = this.state;

        let title = ''
        let dataList = []
        // if (resData) {
        //     title = resData.topData.title;
        //     dataList = resData.topData.dataList;
        //     console.log(resData)
        // }
        if (queryData) {
            title = queryData.topData.title;
            dataList = queryData.topData.dataList;
            console.log(queryData)
        }

        return (
            <Fragment>
                <TopBox>
                    <div className='top_box'>
                        <Decoration10 className='top_decoration10'/>
                        <div className='title-box'>
                            <Decoration8
                                className='top_decoration8'
                                color={['#568aea', '#000000']}
                            />
                            {title && (
                                <div className='title'>
                                    <span className='title-text'>{title}</span>
                                    <Decoration6
                                        className='title-bototm top_decoration6'
                                        reverse={true}
                                        color={['#50e3c2', '#67a1e5']}
                                    />
                                </div>
                            )}


                            <Decoration8
                                reverse={true}
                                className='top_decoration8'
                                color={['#568aea', '#000000']}
                            />
                        </div>
                        <Decoration10 className='top_decoration10 top_decoration10_reverse'/>
                        <TimeBox>
                            <h3>{this.state.timeStr}</h3>
                        </TimeBox>
                    </div>
                    <div className='top_button'>
                        <Tooltip title="返回">
                            <Button type="primary" shape="circle" onClick={() => this.handleClick()}
                                    icon={<LeftCircleOutlined/>}/>
                        </Tooltip>
                    </div>
                    <TopCenter>
                        <div className='detail-list'>
                            {dataList && dataList.map((item, index) => (
                                <div className='detail-list-item' key={index}>
                                    <img
                                        src={require(`../../../assets/images/center-details-data${index + 1}.png`)}
                                        alt={item.title}
                                    />
                                    <div className='detail-item-text'>
                                        <h3>{item.title}</h3>
                                        <span>{item.number}</span>
                                        <span className='unit'>{item.unit}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TopCenter>

                </TopBox>
            </Fragment>
        );
    }
}

// export default index;


const mapStateToProps = state => {
    const {data} = state.secondPage;
    const locationQuery = state.secondPage.params;

    let queryData = null
    if (locationQuery) {
        getSecondPageDataByParams(locationQuery).then(res => {
            if (res) {
                queryData = res
            }
            console.log(queryData)

        })
    }
    return {
        queryData: queryData,
        resData: data,
    };
};
const mapStateToDispatch = dispatch => ({
    dispatch, // 将dispatch方法添加到props中
});

export default connect(mapStateToProps, mapStateToDispatch)(index);
