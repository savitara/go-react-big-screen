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

  handleMapClick = (e) => {
    console.log('获取鼠标点击的坐标');

    // 获取鼠标点击的坐标
    const { offsetX, offsetY } = e.nativeEvent;
    console.log('点击坐标：', offsetX, offsetY);
    // 执行其他操作，如果需要的话
  };

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
        {mapData ? (
          <Chart
            renderer={renderer}
            option={mapOptions(mapData)}
            onClick={this.handleMapClick} // 添加点击事件监听
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Map;
