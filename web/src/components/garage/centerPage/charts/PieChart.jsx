import React, { PureComponent } from 'react';
import Chart from '../../../../utils/chart';


class PieChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
    };
  }

  render() {
    const { data, centerText } = this.props;
    const { renderer } = this.state; // 获取 renderer 的值

    // 定义环形图的配置项
    const option = {
      series: [
        {
          type: 'pie',
          radius: ['20%', '30%'],
          avoidLabelOverlap: false,
          label: {
            show: true, // 显示label
            position: 'outside', // label位置设为外部
            formatter: '{b}', // label格式，{b}为name，{c}为value
            color: '#fff', // 字体颜色设置为白色
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold',
              color: '#fff', // 字体颜色设置为白色
            },
          },
          labelLine: {
            show: true, // 显示labelLine
            length: 10,
            length2: 20, // 控制labelLine的长度
          },
          data: data,
        },
      ],
      // 添加一个环段线段的图形来说明各个环段
      graphic: [
        {
          // 添加环形图中心的文本
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            // text: centerText, // 使用外部传入的中心文本
            text: '', // 使用外部传入的中心文本

            textAlign: 'center',
            fill: '#fff', // 文本颜色设置为白色
            fontSize: 20,
            fontWeight: 'bold',
          },
        },
      ],
    };
    const chartContainerStyle = {
      // width: '4.375rem', // 添加宽度以控制图表容器的大小
      // height: '4.375rem',
      width: '3.65rem', // 添加宽度以控制图表容器的大小
      // height: '2.95rem',
      height: '1.55rem',

      position: 'relative',
      overflow: 'hidden',
    };
    const chartStyle = {
      position: 'absolute',
      top: '-0.5rem',
      left: 0,
      right: 0,
      bottom: 0,
    };
    return (

      <div style={chartContainerStyle}>
        <div style={chartStyle}>
          <Chart renderer={renderer} option={option} />
        </div>
      </div>

    );
  }
}

export default PieChart;
