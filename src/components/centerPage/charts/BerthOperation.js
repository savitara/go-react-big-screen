import React, { PureComponent } from 'react';
import Chart from '../../../utils/chart';
import { berthOperations } from './options';
import { berthTurnoverRateOperations } from './options';
import { berthUtilizationRateOperations } from './options';

// 
class BerthOperation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
    };
  }

  render() {
    const { renderer } = this.state;
    const { inline } = this.props;
    const offlinePortalData = {
      "xData": [
        "2/21",
        "2/22",
        "2/23"
      ],
      "barData": [
        3,
        4,
        3
      ]
    };
     const UtilizationRateData = {
      "xData": [
        "2/21",
        "2/22",
        "2/23",
        "2/24",
        "2/25",
        "2/26",
      ],
      "barData": [
        30,
        40,
        32,
        60,
        50,
        72,
      ]
    }

    // 确定是否将图表并排显示
    const displayInline = inline ? { display: 'flex' } : {};

    return (
      <div style={displayInline}>
        <div style={{ width: '5.375rem', height: '2.875rem' }}>
          <Chart
            renderer={renderer}
            option={berthTurnoverRateOperations(offlinePortalData)}
          />
        </div>
        <div style={{ width: '5.375rem', height: '2.875rem' }}></div>
        {/* 添加第二个图表 */}
        <div style={{ width: '5.375rem', height: '2.875rem' }}>
          {/* 渲染第二个图表的内容 */}
          <Chart
            renderer={renderer}
            option={berthUtilizationRateOperations(UtilizationRateData)}
          />
        </div>
        <div style={{ width: '5.375rem', height: '2.875rem' }}></div>

      </div>
    );
  }
}

export default BerthOperation;
