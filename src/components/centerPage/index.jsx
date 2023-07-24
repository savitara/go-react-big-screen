import React, { PureComponent } from 'react';
import { CenterPage, CenterBottom, CenterBottomWidth, ModuleTitle, BottomBox, LeftDiv, RightDiv } from './style';
import Map from './charts/Map';
import { connect } from 'dva';
import OfflinePortal from './charts/OfflinePortal';
import Feedback from './charts/Feedback';
import { BorderBox12, BorderBox13 } from '@jiaminghi/data-view-react';
import TrafficSituation from './charts/TrafficSituation';
import PieChart from './charts/PieChart'; //

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { berthOperation, detailsList, mapData, parkingRecord } = this.props;
    console.log(parkingRecord); // 添加这行调试语句
    const parkingHabitsData = [
      { value: 335, name: '1到60分钟' },
      { value: 234, name: '1到12小时' },
      { value: 310, name: '12到24小时' },
      { value: 60, name: '24小时以上' },
      { value: 10, name: '48小时以上' },

      // Add more data points as needed
    ];
    const paymentChannelsData = [
      { value: 335, name: '微信支付' },
      { value: 310, name: '支付宝支付' },
      { value: 234, name: '云闪付' },
      // Add more data points as needed
    ];
    return (
      <CenterPage>
        <div style={{ display: 'flex' }}>
          <LeftDiv>

            <BorderBox12 className='left-top-borderBox12'>
              <div className='left-top'>
                <ModuleTitle>
                  <i className='iconfont'>&#xe78f;</i>
                  <span>停车记录(每月)</span>
                </ModuleTitle>
                <TrafficSituation trafficSitua={parkingRecord}></TrafficSituation>
                <ModuleTitle>
                  <i className='iconfont'>&#xe78f;</i>
                  <span>路段实时视频</span>
                </ModuleTitle>
              </div>
            </BorderBox12>
            <BorderBox13 className='pie-chart-borderBox13'>

            </BorderBox13>
          </LeftDiv>
          <Map mapData={mapData} style={{ width: '20.625rem', height: '8.125rem' }} />
          <RightDiv>
            <BorderBox12 className='top-borderBox12'>
              <div className='top'>
                <ModuleTitle>
                  <i className='iconfont'>&#xe78f;</i>
                  <span>支付渠道和停车习惯</span>
                </ModuleTitle>

                {/* 环形图 -支付、 停车习惯 */}
                <div style={{ display: 'flex' }}>
                  <PieChart id="chart1" width="300px" height="5.375rem" data={paymentChannelsData} centerText="支付习惯" />
                  <PieChart id="chart2" width="300px" height="5.375rem" data={parkingHabitsData} centerText="停车习惯" />
                </div>
              </div>
            </BorderBox12>
          </RightDiv>
        </div>

        <CenterBottomWidth>
          <div className='detail-list'>
            {detailsList
              ? detailsList.map((item, index) => {
                return (
                  <>
                    <div className='detail-list-item' key={index}>
                      <ModuleTitle>
                        <i className='iconfont'>&#xe790;</i>
                        <span>泊位运营</span>
                      </ModuleTitle>
                      {/* 柱状图 */}
                      <div className='offline-portal-box'>
                        {berthOperation ? (
                          <OfflinePortal
                            offlinePortalData={berthOperation.berthOperationPortalData}
                          />
                        ) : (
                          ''
                        )}
                      </div>
                      {/* <BottomBox>
                        <div className='feedback-box'>
                          {berthOperation
                            ? berthOperation.feedback.map((item, index) => {
                              return (
                                <div className='feedback-box-item' key={index}>
                                  <Feedback FeedbackData={item}></Feedback>
                                  <span className='dis-text'>{item.title}</span>
                                </div>
                              );
                            })
                            : ''}
                        </div>
                      </BottomBox> */}
                    </div>

                  </>

                );
              })
              : ''}
          </div>
        </CenterBottomWidth>
      </CenterPage>
    );
  }
}

const mapStateToProps = state => {
  return {
    detailsList: state.centerPage.detailsList,
    mapData: state.centerPage.mapData,
    berthOperation: state.centerPage.berthOperation,
    parkingRecord: state.centerPage.parkingRecord // Add parkingRecord here
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
