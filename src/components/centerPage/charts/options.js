import echarts from 'echarts/lib/echarts';
import 'echarts/map/js/china';


// 周转率
export const FeedbackOptions = params => ({
  title: {
    text: `${params.number}%`,
    left: '45%',
    top: '40%',
    textAlign: 'center',
    textStyle: {
      fontSize: '16',
      fontWeight: '500',
      color: '#909dff',
      textAlign: 'center',
    },
  },
  series: [
    {
      type: 'pie',
      startAngle: 0,
      radius: ['80%', '70%'],
      center: ['50%', '50%'],
      data: [
        {
          value: params.number,
          name: params.title,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#5a8bfa',
                },
                {
                  offset: 1,
                  color: '#831bdb',
                },
              ]),
              shadowColor: 'rgba(175,143,230,.5)',
              shadowBlur: 10,
            },
          },
          label: {
            show: false,
          },
          labelLine: {
            normal: {
              smooth: true,
              lineStyle: {
                width: 0,
              },
            },
          },
          hoverAnimation: false,
        },
        {
          label: {
            show: false,
          },
          labelLine: {
            normal: {
              smooth: true,
              lineStyle: {
                width: 0,
              },
            },
          },
          value: 100 - params.number,
          hoverAnimation: true,
          itemStyle: {
            color: 'rgba(79,76,192, 0.3)',
          },
        },
      ],
    },
  ],
});

//  柱状图
export const berthOperations = params => ({
  color: ['#73A0FA', '#73DEB3', '#32C5E9', '#67E0E3'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999',
      },
      lineStyle: {
        type: 'dashed',
      },
      label: {
        precision: 0, // 设置为0，确保只显示整数值
      },
    },
  },
  grid: {
    left: '15',
    right: '40',
    bottom: '10',
    top: '30',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: params.xData,
      name: '日期(月/日)', // 在此处添加 x 轴的名称
      nameLocation: 'end', // 设置 x 轴名称的位置（可选）
      nameGap: -20, // 调整名称与坐标轴之间的距离，适当调整这个值来实现尾部显示效果
      nameTextStyle: {
        color: '#BCDCF0', // 设置 x 轴名称的样式（可选）
      },
      axisLabel: {
        color: '#BCDCF0',
        textStyle: {
          fontSize: 12,
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: false,
      },
      boundaryGap: true,
    },
  ],

  yAxis: [
    {
      type: 'value',
      name: '周转率(次/天)',
      // 添加 offset 属性来调整整个 y 轴相对于绘图区的偏移量
      offset: -20,
      nameTextStyle: {
        color: '#BCDCFF',
      },
      axisLabel: {
        color: '#BCDCF0',
        textStyle: {
          fontSize: 12,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#252938',
        },
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: true,
      },
    },

  ],
  series: [
    {
      type: 'bar',
      data: params.barData,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(34,224,214,.8)',
            },
            {
              offset: 0.5,
              color: 'rgba(5,137,186,1)',
            },
            {
              offset: 1,
              color: 'rgba(11,12,31,1)',
            },
          ]),
          barBorderRadius: 7.5,
        },
      },
      barMaxWidth: 15,
      label: {
        show: true,
        position: 'top', // 在柱形的顶部显示标签
        color: '#BCDCFF', // 可以自定义标签颜色
        fontSize: 12, // 可以自定义标签字体大小
      },
    },
  ],
});

//  柱状图
export const berthTurnoverRateOperations = params => ({
  color: ['#73A0FA', '#73DEB3', '#32C5E9', '#67E0E3'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999',
      },
      lineStyle: {
        type: 'dashed',
      },
      label: {
        precision: 0, // 设置为0，确保只显示整数值
      },
    },
  },
  grid: {
    left: '15',
    right: '40',
    bottom: '10',
    top: '30',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: params.xData,
      name: '日期(月/日)', // 在此处添加 x 轴的名称
      nameLocation: 'end', // 设置 x 轴名称的位置（可选）
      nameGap: -20, // 调整名称与坐标轴之间的距离，适当调整这个值来实现尾部显示效果
      nameTextStyle: {
        color: '#BCDCF0', // 设置 x 轴名称的样式（可选）
      },
      axisLabel: {
        color: '#BCDCF0',
        textStyle: {
          fontSize: 12,
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: false,
      },
      boundaryGap: true,
    },
  ],

  yAxis: [
    {
      type: 'value',
      name: '周转率(次/天)',
      // 添加 offset 属性来调整整个 y 轴相对于绘图区的偏移量
      offset: -20,
      nameTextStyle: {
        color: '#BCDCFF',
      },
      axisLabel: {
        color: '#BCDCF0',
        textStyle: {
          fontSize: 12,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#252938',
        },
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: true,
      },
    },

  ],
  series: [
    {
      type: 'bar',
      data: params.barData,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(34,224,214,.8)',
            },
            {
              offset: 0.5,
              color: 'rgba(5,137,186,1)',
            },
            {
              offset: 1,
              color: 'rgba(11,12,31,1)',
            },
          ]),
          barBorderRadius: 7.5,
        },
      },
      barMaxWidth: 15,
      label: {
        show: true,
        position: 'top', // 在柱形的顶部显示标签
        color: '#BCDCFF', // 可以自定义标签颜色
        fontSize: 12, // 可以自定义标签字体大小
      },
    },
  ],
});

//  柱状图
export const berthUtilizationRateOperations = params => ({
  color: ['#73A0FA', '#73DEB3', '#32C5E9', '#67E0E3'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999',
      },
      lineStyle: {
        type: 'dashed',
      },
      label: {
        precision: 0, // 设置为0，确保只显示整数值
      },
    },
  },
  grid: {
    left: '15',
    right: '40',
    bottom: '10',
    top: '30',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: params.xData,
      name: '日期(月/日)', // 在此处添加 x 轴的名称
      nameLocation: 'end', // 设置 x 轴名称的位置（可选）
      nameGap: -20, // 调整名称与坐标轴之间的距离，适当调整这个值来实现尾部显示效果
      nameTextStyle: {
        color: '#BCDCF0', // 设置 x 轴名称的样式（可选）
      },
      axisLabel: {
        color: '#BCDCF0',
        textStyle: {
          fontSize: 12,
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: false,
      },
      boundaryGap: true,
    },
  ],

  yAxis: [
    {
      type: 'value',
      name: '利用率(次/天)',
      // 添加 offset 属性来调整整个 y 轴相对于绘图区的偏移量
      offset: -20,
      nameTextStyle: {
        color: '#BCDCFF',
      },
      axisLabel: {
        color: '#BCDCF0',
        textStyle: {
          fontSize: 12,
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#252938',
        },
      },
      axisTick: {
        show: true,
      },
      axisLine: {
        show: true,
      },
    },

  ],
  series: [
    {
      type: 'bar',
      data: params.barData,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(34,224,214,.8)',
            },
            {
              offset: 0.5,
              color: 'rgba(5,137,186,1)',
            },
            {
              offset: 1,
              color: 'rgba(11,12,31,1)',
            },
          ]),
          barBorderRadius: 7.5,
        },
      },
      barMaxWidth: 15,
      label: {
        show: true,
        position: 'top', // 在柱形的顶部显示标签
        color: '#BCDCFF', // 可以自定义标签颜色
        fontSize: 12, // 可以自定义标签字体大小
      },
    },
  ],
});


export const trafficOptions = (params) => ({
  title: {
    show: false,
  },
  legend: {
    show: true,
    top: '5%',
    textStyle: {
      color: '#c0c9d2',
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(0, 255, 233,0)',
            },
            {
              offset: 0.5,
              color: 'rgba(255, 255, 255,1)',
            },
            {
              offset: 1,
              color: 'rgba(0, 255, 233,0)',
            },
          ],
          global: false,
        },
      },
    },
  },
  grid: {
    top: '15%',
    left: '10%',
    right: '5%',
    bottom: '10%',
  },
  xAxis: {
    type: 'category',
    axisLine: {
      show: true,
    },
    splitArea: {
      color: '#f00',
      lineStyle: {
        color: '#f00',
      },
    },
    axisLabel: {
      color: '#BCDCF0',
    },
    splitLine: {
      show: false,
    },
    boundaryGap: false,
    data: params.timeList,
  },

  yAxis: {
    type: 'value',
    min: 0,
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,0.1)',
      },
    },
    axisLine: {
      show: true,
    },
    axisLabel: {
      show: true,
      margin: 10,
      textStyle: {
        color: '#d1e6eb',
      },
    },
    axisTick: {
      show: false,
    },
  },
  series: [
    {
      name: '车辆数',
      type: 'line',
      smooth: false, //是否平滑
      lineStyle: {
        normal: {
          color: '#FFA500',  // 橙色的十六进制代码
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 0,
          shadowOffsetY: 5,
          shadowOffsetX: 5,
        },
      },
      label: {
        show: false,
        position: 'top',
        textStyle: {
          color: '#FFA500',  // 橙色的十六进制代码
        },
      },
      // 去除点标记
      symbolSize: 0,
      // 鼠标放上去还是要有颜色的
      itemStyle: {
        color: '#FFA500',  // 橙色的十六进制代码
      },
      // 设置渐变色
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(0,179,244,0.3)',
              },
              {
                offset: 1,
                color: 'rgba(0,179,244,0)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0,179,244, 0.9)',
          shadowBlur: 20,
        },
      },
      data: params.utilizationRate,
    },

  ],
});

export const mapOptions = (params) => ({
  title: {
    show: false,
    text: '全国停车热力图',
    left: 'center',
    textStyle: {
      color: '#fff',
    },
  },
  visualMap: {
    show: false, // 隐藏热力图调节标志
    min: 0,
    max: 100, // 根据你的数据设置范围
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    bottom: 10,
    inRange: {
      color: ['#00008B', '#FF4500'], // 调整热力点的颜色范围
    },
  },
  geo: {
    // tag: 'map',
    // nameMap: {
    //   China: '中国',
    // },
    map: 'china',
    label: {
      normal: {
        show: true, //显示省份标签
        textStyle: { color: '#585858', fontSize: 12 }, //省份标签字体颜色
      },
      emphasis: {
        //对应的鼠标悬浮效果
        show: true,
        textStyle: { color: '#fff' },
      },
    },
    zoom: 1.2,
    itemStyle: {
      normal: {
        borderColor: 'rgba(255,209,163, .5)', // 区域边框颜色
        areaColor: 'rgba(73,86,166,.1)', // 区域颜色
        borderWidth: 0.5, // 区域边框宽度
        shadowBlur: 5,
        shadowColor: 'rgba(107,91,237,.7)',
      },
      emphasis: {
        borderColor: '#FFD1A3',
        areaColor: 'rgba(102,105,240,.3)',
        borderWidth: 1,
        shadowBlur: 5,
        shadowColor: 'rgba(135,138,255,.5)',
      },
    },
  },
  series: [
    {
      name: '热力图',
      type: 'heatmap',
      coordinateSystem: 'geo',
      blurSize: 10,//颜色变化范围
      pointSize: 8, // 调整热力点的大小，使其更小
      data: [
        {
          value: [107.38, 23.19, 120]
        },
        {
          value: [111, 37.86, 1140]
        },
        {
          value: [121, 36.86, 114]
        },
        {
          value: [116.37, 23.19, 120]
        },
        // 添加更多热力点数据
      ],
    },
  ],
});
