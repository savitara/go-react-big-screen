import React, { PureComponent } from 'react';
import { CapsuleChart } from '@jiaminghi/data-view-react';

class UserSituation extends PureComponent {
  render() {
    const { userIdentityCategory } = this.props;

    if (!userIdentityCategory || !userIdentityCategory.data) {
      // If userIdentityCategory or its data property is undefined, return null or a message
      return <div>暂无数据。</div>;
    }

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      series: [
        {
          name: 'Direct',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
          name: 'Mail Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Affiliate Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ad',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
          name: 'Search Engine',
          type: 'bar',
          stack: 'total',
          label: {
            show: true
          },
          emphasis: {
            focus: 'series'
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
      ]
    };

    const config = {
      // 单位
      unit: '（车位）',
      showValue: true,
      data: userIdentityCategory.data.map((item) => ({
        name: item.name,
        value: item.used,
        total: item.total,
      })),
    };

    const customStyle = {
      // 在这里定义前后段使用的颜色
      frontColor: 'red',
      backColor: 'green',
    };

    return (
      <div style={{ position: 'relative', marginBottom: '10px' }}>
        <CapsuleChart
          config={config}
          option={option} // Pass the option object as a prop (optional, if CapsuleChart accepts ECharts options)
          style={{
            width: '5.85rem',
            height: '2.625rem',
          }}
          customStyle={customStyle}
        />
        {/* 图示说明 */}
        {/* <div style={{ position: 'absolute', top: '5px', right: '5px', textAlign: 'right', fontSize: '12px', zIndex: 1, color: 'white' }}>
          <span style={{ display: 'inline-block', marginRight: '10px' }}>
            <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: customStyle.frontColor, marginRight: '5px' }}></span>
            已用车位
          </span>
          <span style={{ display: 'inline-block' }}>
            <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: customStyle.backColor, marginRight: '5px' }}></span>
            剩余车位
          </span>
        </div> */}
      </div>
    );
  }
}

export default UserSituation;
