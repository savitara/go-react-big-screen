import React, { PureComponent } from 'react';
import * as echarts from 'echarts';
import 'zrender/lib/svg/svg';
import { debounce } from './index'; // 一个节流函数
import 'echarts-liquidfill/src/liquidFill.js'

export default class Chart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: '100%',
      height: '100%',
    };
    this.chart = null;
  }

  async componentDidMount() {
    // 初始化图表
    await this.initChart(this.el);
    // 注入传入的配置（包括数据）
    this.setOption(this.props.option);
    // 监听屏幕大小变化并重新绘制ECharts图表
    window.addEventListener('resize', debounce(this.resize, 100));
    // 添加鼠标点击事件监听
    this.chart.on('click', this.handleChartClick);
  }

  componentDidUpdate() {
    // 每次更新重设图表
    this.setOption(this.props.option);
  }

  componentWillUnmount() {
    // 组件卸载前销毁图表
    this.dispose();
  }

  render() {
    const { width, height } = this.state;

    return (
      <div className='default-chart' ref={el => (this.el = el)} style={{ width, height }} />
    );
  }

  initChart = el => {
    // renderer 用于配置渲染模式（svg 或 canvas）
    const renderer = this.props.renderer || 'canvas';

    return new Promise(resolve => {
      setTimeout(() => {
        this.chart = echarts.init(el, null, {
          renderer,
          width: 'auto',
          height: 'auto',
        });
        resolve();
      }, 0);
    });
  };

  setOption = option => {
    if (!this.chart) {
      return;
    }

    const notMerge = this.props.notMerge;
    const lazyUpdate = this.props.lazyUpdate;

    this.chart.setOption(option, notMerge, lazyUpdate);
  };

  dispose = () => {
    if (!this.chart) {
      return;
    }

    this.chart.dispose();
    this.chart = null;
  };

  resize = () => {
    this.chart && this.chart.resize();
  };

  getInstance = () => {
    return this.chart;
  };

  handleChartClick = params => {
    // 获取鼠标点击事件的坐标
    const { offsetX, offsetY } = params.event;
    console.log('点击坐标：', offsetX, offsetY);
    // 根据需要执行其他操作
  };
}
