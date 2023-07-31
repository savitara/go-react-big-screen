import React, { PureComponent } from 'react';
import echarts from 'echarts'; // 导入 Echarts 库

class PieChart extends PureComponent {
  componentDidMount() {
    // 组件加载后调用绘制图表的方法
    this.renderChart();
  }

  componentDidUpdate(prevProps) {
    // 如果组件接收到新的数据或中心文本，更新图表
    if (prevProps.data !== this.props.data || prevProps.centerText !== this.props.centerText) {
      this.renderChart();
    }
  }

  renderChart() {
    const { data, centerText } = this.props;

    // 获取图表容器的 DOM 元素
    const chartDom = document.getElementById(`pieChartContainer_${this.props.id}`);

    // 初始化 Echarts 实例
    const myChart = echarts.init(chartDom);

    // 定义环形图的配置项
    const option = {
      series: [
        {
          type: 'pie',
          radius: ['10%', '15%'],
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
              fontSize: '10',
              fontWeight: 'bold',
              color: '#fff', // 字体颜色设置为白色
            },
          },
          labelLine: {
            show: true, // 显示labelLine
            length: 5,
            length2: 10, // 控制labelLine的长度
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
            text: centerText, // 使用外部传入的中心文本
            textAlign: 'center',
            fill: '#fff', // 文本颜色设置为白色
            fontSize: 10,
            fontWeight: 'bold',
          },
        },
      ],
    };

    // 使用配置项设置图表内容
    myChart.setOption(option);
  }

  render() {
    const { id, width, height } = this.props;

    return (
      <div>
        {/* 放置图表容器 */}
        <div id={`pieChartContainer_${id}`} style={{ width, height }}></div>
      </div>
    );
  }
}

export default PieChart;
