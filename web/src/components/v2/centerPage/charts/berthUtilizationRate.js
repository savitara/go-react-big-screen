import React, { PureComponent } from 'react';
import Chart from '../../../../utils/chart';
import { berthOperations } from './options';

class OfflinePortal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
    };
  }

  render() {
    const { renderer } = this.state;
    const { offlinePortalData, inline } = this.props;

    // 确定是否将图表并排显示
    const displayInline = inline ? { display: 'flex' } : {};

    return (
      <div style={displayInline}>
        <div style={{ width: '5.375rem', height: '2.875rem' }}>
          <Chart
            renderer={renderer}
            option={berthOperations(offlinePortalData)}
          />
        </div>
        {/* 添加第二个图表 */}
        <div style={{ width: '5.375rem', height: '2.875rem' }}>
          {/* 渲染第二个图表的内容 */}
        </div>
      </div>
    );
  }
}

export default OfflinePortal;
