import echarts from 'echarts/lib/echarts';

// 关联数据类别
export const BrowseCategoriesOptions = params => ({
  radar: {
    center: ['50%', '50%'],
    radius: '70%',
    name: {
      formatter: function (name) {
        let arr;
        arr = ['{a|' + name + '}'];
        return arr.join('\n');
      },
      textStyle: {
        rich: {
          //根据文字的组设置格式
          a: {
            color: '#BCDCFF',
            fontSize: 14,
            fontWeight: 600,
            fontFamily: 'Source Han Sans CN',
          },
        },
      },
    },
    // 名字和图形的距离
    nameGap: 5,
    indicator: params.indicator,
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    splitArea: {
      areaStyle: {
        color: [
          'rgba(84,136,255, 0.05)',
          'rgba(84,136,255, 0.1)',
          'rgba(84,136,255, 0.2)',
          'rgba(84,136,255, 0.3)',
          'rgba(84,136,255, 0.4)',
          'rgba(84,136,255, 0.5)',
        ].reverse(),
        shadowColor: 'rgba(0, 0, 0, .5)',
        shadowBlur: 5,
        shadowOffsetX: 10,
        shadowOffsetY: 10,
      },
    },
  },
  series: [
    {
      name: '用户浏览类别',
      type: 'radar',
      data: [params.data],
      label: {
        show: false,
        formatter: function (params) {
          return params.value + '万';
        },
        color: '#9ae8ac',
        distance: 10,
        align: 'right',
      },
      symbol: 'none',
      symbolSize: [6, 6],
      // 边缘颜色
      lineStyle: {
        color: 'rgba(160,159,246, 0.6)',
        width: 2,
      },
      areaStyle: {
        color: 'rgba(114,113,233,.4)',
        opacity: 0.8,
        shadowColor: 'rgba(115,149,255,1)',
        shadowBlur: 10,
      },
    },
  ],
});

// 用户支付转化率
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

//  用户柱状图
export const OfflinePortalOptions = params => ({
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
    right: '15',
    bottom: '0',
    top: '30',
    containLabel: true,
  },
  legend: {
    data: ['门店1', '门店2', '门店3', '门店4'],
    show: true,
    textStyle: {
      color: '#BCDCFF',
    },
  },
  xAxis: [
    {
      type: 'category',
      data: params.xData,
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
    {
      type: 'category',
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
      name: '用户/个',
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
      name: '用户数量',
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

// 人员和设备状态
export const PersonnelAndEquipmentStatusOptions = (
  onDutyPersonnel,
  offDutyPersonnel,
  onlineEquipment,
  offlineEquipment
) => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
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
    data: ['人员',  '设备']
  },
  series: [
    {
      name: '人数',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: onDutyPersonnel
    },
    {
      name: '人数',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: offDutyPersonnel
    },
    {
      name: '设备数',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: onlineEquipment
    },
    {
      name: '设备数',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: offlineEquipment
    }
  ],
});

export const PersonnelStatusOptions = (
  onDutyPersonnel,
  offDutyPersonnel,
) => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
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
    axisLabel: {
      color: '#ffffff', // 设置x轴标签字体颜色为深灰色 (#333)
    },
    type: 'value'
  },
  yAxis: {
    type: 'category',
    axisLabel: {
      color: '#ffffff', // 设置x轴标签字体颜色为深灰色 (#333)
    },
    data: ['人员']
  },
  series: [
    {
      name: '在岗',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: onDutyPersonnel,
      // 设置在岗人员柱状图的颜色为蓝色 (#3a9eff)
      itemStyle: {
        color: '#3a9eff',
      },
    },
    {
      name: '离岗',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: offDutyPersonnel,
      // 设置离岗人员柱状图的颜色为红色 (#ff4b5c)
      itemStyle: {
        color: '#fadb14',
      },
    },
  ],
});


export const EquipmentStatusOptions = (
  onlineEquipment,
  offlineEquipment,
) => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
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
    type: 'value',
    axisLabel: {
      color: '#ffffff', // 设置x轴标签字体颜色为深灰色 (#333)
    },
  },
  yAxis: {
    type: 'category',
    data: ['设备'],
    axisLabel: {
      color: '#ffffff', // 设置x轴标签字体颜色为深灰色 (#333)
    },
  },
  series: [
    {
      name: '在线',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: onlineEquipment,
      // 设置在线设备柱状图的颜色为绿色 (#52c41a)
      itemStyle: {
        color: '#3a9eff',
      },
    },
    {
      name: '离线',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: offlineEquipment,
      // 设置离线设备柱状图的颜色为黄色 (#fadb14)
      itemStyle: {
        color: '#fadb14',
      },
    },
  ],
});


//分路段停车
export const RoadParkingOptions = params => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
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
    axisLabel: {
      color: '#ffffff', // 设置x轴标签字体颜色为深灰色 (#333)
    },
    type: 'value'
  },
  yAxis: {
    axisLabel: {
      color: '#ffffff', // 设置x轴标签字体颜色为深灰色 (#333)
    },
    type: 'category',
    data: ['横河路', '中山路', '城东大道', '泉飞翼巷', '日月路', '程东路', '城都路']
  },
  series: [
    {
      name: '泊位占用',
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
      name: '泊位空余',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    }

  ],
});
