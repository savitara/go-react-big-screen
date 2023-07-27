import React, {PureComponent} from 'react';
import {LeftPage, LeftTopBox, LeftBottomBox} from './style';
import {ModuleTitle} from '../../style/globalStyledSet';
import {BorderBox12, BorderBox13} from '@jiaminghi/data-view-react';
import TrafficSituation from './charts/TrafficSituation';
import UserSituation from './charts/UserSituation';
import {connect} from 'dva';
import {DatePicker, Space} from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(), // 设置默认值为今天
        };
        this.handleChange = this.handleChange.bind(this);
    }

    async fetchDataFromBackend(selectedDate) {
        try {
            const response = await fetch(`/api/leftPageData?date=${selectedDate}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('从后端获取数据时出错:', error);
            return null;
        }
    }

    async handleChange(date, dateString) {
        // 更新组件的状态，将选择的日期赋值给startDate
        this.setState({
            startDate: date,
        });

        // 根据选择的日期，从后端API获取新数据
        const newData = await this.fetchDataFromBackend(dateString);

        // 将新数据更新到组件的状态中
        if (newData) {
            this.setState({
                // userSitua: newData.userSitua,
                trafficSitua: newData.trafficSitua,
            });
        }
    }

    render() {
        const {userSitua, trafficSitua, accessFrequency, peakFlow} = this.props;
        const {startDate} = this.state;
        const showLeftPage = true;
        return (
            <>
                {showLeftPage && (<LeftPage>
                    {/* 顶部图表 */}
                    <LeftTopBox>
                        <BorderBox12 className='left-top-borderBox12'>
                            <div className='left-top'>
                                <ModuleTitle>
                                    <i className='iconfont'>&#xe78f;</i>
                                    <span>停车场实时泊位利用率(24小时)</span>
                                </ModuleTitle>
                                <Space direction='vertical'>
                                    {/*<DatePicker*/}
                                    {/*  locale={locale}*/}
                                    {/*  onChange={this.handleChange}*/}
                                    {/*  defaultValue={startDate} // 设置默认值*/}
                                    {/*/>*/}
                                </Space>
                                {/* 图表 */}
                                <TrafficSituation trafficSitua={trafficSitua}></TrafficSituation>
                            </div>
                        </BorderBox12>

                    </LeftTopBox>

                    {/* 底部图表 */}
                    <LeftBottomBox>
                        <BorderBox13 className='left-bottom-borderBox13'>
                            <div className='left-bottom'>
                                <ModuleTitle>
                                    <i className='iconfont'>&#xe88e;</i>
                                    <span>车辆统计</span>
                                </ModuleTitle>
                                {/* 图表 */}
                                <UserSituation userSitua={userSitua}></UserSituation>
                            </div>
                        </BorderBox13>
                    </LeftBottomBox>

                </LeftPage>)}
            </>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        accessFrequency: state.leftPage.accessFrequency,
        peakFlow: state.leftPage.peakFlow,
        userSitua: state.leftPage.userSitua,
        trafficSitua: state.leftPage.trafficSitua,
    };
};

const mapStateToDispatch = (dispatch) => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
