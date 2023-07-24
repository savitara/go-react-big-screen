import React, { PureComponent } from 'react';
import Chart from '../../../utils/chart';
import { mapOptions } from './options';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
    };
  }

  render() {
    const { renderer } = this.state;
    const { mapData } = this.props;
    return (
      <div
        style={{
          width: '10.625rem',
          height: '8.125rem',
          display: 'inline-block', // 添加此样式以使组件并排显示
        }}>
        {mapData ? <Chart renderer={renderer} option={mapOptions(mapData)} /> : ''}
      </div>
    );
  }
}

export default Map;
