/*
 * @FileName: index.jsx
 * @version: 
 * @Author: LZH
 * @Date: 2023-07-18 17:11:09
 * @Description: 
 * @LastEditors: LZH
 * @LastEditTime: 2023-07-24 17:04:34
 */
import React, { PureComponent } from 'react';
import { BorderBox13 } from '@jiaminghi/data-view-react';
import BrowseCategories from './charts/BrowseCategories';
import RoadParking from './charts/RoadParking';
import PersonnelAndEquipmentStatus from './charts/PersonnelAndEquipmentStatus';


import OfflinePortal from './charts/OfflinePortal';
import Feedback from './charts/Feedback';
import { ModuleTitle } from '../../style/globalStyledSet';
import { connect } from 'dva';
// import { PersonnelAndEquipmentStatus } from './charts/PersonnelAndEquipmentStatus'
import {
  RightPage,
  RightTopBox,
  RightCenterBox,
  RightBottomBox,
} from './style';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { offline, browseCategories, userIdentityCategory } = this.props;

    // 从userIdentityCategory数据中计算personnelOnDuty
    const personnelOnDuty = 35;

    // 假设您拥有以下人员和设备状态的数据
    const personnelOffDuty = 100 - personnelOnDuty;
    const equipmentOnline = 60; // 用实际的API响应数据替换
    const equipmentOffline = 40; // 用实际的API响应数据替换

    return (
      <RightPage>
        <RightTopBox>
          <div className='right-top'>
            <ModuleTitle>
              <i className='iconfont'>&#xe7f7;</i>
              <span>路段车位使用</span>
            </ModuleTitle>
            <RoadParking ></RoadParking>

          </div>
        </RightTopBox>

        <RightCenterBox>
          <ModuleTitle>
            <i className='iconfont'>&#xe7fd;</i>
            <span>人员和设备情况</span>

            <PersonnelAndEquipmentStatus ></PersonnelAndEquipmentStatus>

          </ModuleTitle>
        </RightCenterBox>

        <RightBottomBox>
          <BorderBox13 className='right-bottom-borderBox13'>
            <div className='right-bottom'>
              <ModuleTitle>
                <i className='iconfont'>&#xe790;</i>
                <span>今日用户统计</span>
              </ModuleTitle>
              {/* 支付用户转化率 */}
              <div className='feedback-box'>
                {offline
                  ? offline.feedback.map((item, index) => {
                    return (
                      <div className='feedback-box-item' key={index}>
                        <Feedback FeedbackData={item}></Feedback>
                        <span className='dis-text'>{item.title}</span>
                      </div>
                    );
                  })
                  : ''}
              </div>
              {/* 柱状图 */}
              <div className='offline-portal-box'>
                {offline ? (
                  <OfflinePortal
                    offlinePortalData={offline.offlinePortalData}
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
          </BorderBox13>
        </RightBottomBox>
      </RightPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    browseCategories: state.rightPage.browseCategories,
    userIdentityCategory: state.rightPage.userIdentityCategory,
    offline: state.rightPage.offline,
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
