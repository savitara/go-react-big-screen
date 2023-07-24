import React, { PureComponent, Fragment } from 'react';
import { formatTime } from '../../utils';
import {
  Decoration10,
  Decoration8,
  Decoration6,
} from '@jiaminghi/data-view-react';

import { TopBox, TimeBox, TopCenter } from './style';

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '大数据可视化平台',
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

  render() {
    const { title } = this.state;
    const detailsList = [
      {
        title: '订单总金额',
        number: 2600.5,
        unit: '元/月',
      },
      {
        title: '停车记录总量',
        number: 3130,
        unit: '条/月',
      }, {
        title: '用户缴费率/月',
        number: 85.5,
        unit: '%',
      }, {
        title: '今日订单总额',
        number: 2116.0,
        unit: '元',
      }, {
        title: '今日订单数量',
        number: 260,
        unit: '单',
      }, {
        title: '今日缴费率',
        number: 89.94,
        unit: '%',
      },
      // Add more items here if needed
    ];
    return (
      <Fragment>
        <TopBox>
          <div className='top_box'>
            <Decoration10 className='top_decoration10' />
            <div className='title-box'>
              <Decoration8
                className='top_decoration8'
                color={['#568aea', '#000000']}
              />
              <div className='title'>
                <span className='title-text'>{title}</span>
                <Decoration6
                  className='title-bototm top_decoration6'
                  reverse={true}
                  color={['#50e3c2', '#67a1e5']}
                />
              </div>

              <Decoration8
                reverse={true}
                className='top_decoration8'
                color={['#568aea', '#000000']}
              />
            </div>
            <Decoration10 className='top_decoration10 top_decoration10_reverse' />
            <TimeBox>
              <h3>{this.state.timeStr}</h3>
            </TimeBox>
          </div>
          <TopCenter>
            <div className='detail-list'>
              {detailsList.map((item, index) => (
                <div className='detail-list-item' key={index}>
                  <img
                    src={require(`../../assets/images/center-details-data${index + 1}.png`)}
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

export default index;
