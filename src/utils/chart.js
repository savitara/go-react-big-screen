import React, { PureComponent } from 'react';
import * as echarts from 'echarts';
import 'zrender/lib/svg/svg';
import { debounce } from './index'; // A throttle function

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
    // Initialize the chart
    await this.initChart(this.el);
    // Inject the passed configuration (including data)
    this.setOption(this.props.option);
    // Listen for screen resize and redraw the ECharts chart
    window.addEventListener('resize', debounce(this.resize, 100));
    // Add the mouse click event listener
    this.chart.getZr().on('click', this.handleChartClick);
  }

  componentDidUpdate() {
    // Reset the chart on each update
    this.setOption(this.props.option);
  }

  componentWillUnmount() {
    // Unmount the chart before the component is unmounted
    this.dispose();
  }

  render() {
    const { width, height } = this.state;

    return (
      <div className='default-chart' ref={el => (this.el = el)} style={{ width, height }} />
    );
  }

  initChart = el => {
    // renderer is used to configure the rendering mode (svg or canvas)
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
    // Get the coordinates of the click event
    const { offsetX, offsetY } = params.event;
    console.log('Click coordinates:', offsetX, offsetY);
    // Execute other actions if needed
    
  };
}
