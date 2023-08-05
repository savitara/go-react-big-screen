# go-react-big-screen


堆叠柱状图配置

```
  // 堆叠的柱状图配置
        const chartOption = {
            "chartContainerStyle": {
                width: "3.65rem",
                height: "1.55rem",
                position: "relative",
                overflow: "hidden"
            },
            chartStyle: {
                position: "absolute",
                top: "-0.1rem",
                left: "0",
                right: "0",
                bottom: "0"
            },
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {},
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [

                    {
                        name: 'Email',
                        type: 'bar',
                        stack: 'Ad',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'Union Ads',
                        type: 'bar',
                        stack: 'Ad',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'Video Ads',
                        type: 'bar',
                        stack: 'Ad',
                        emphasis: {
                            focus: 'series'
                        },
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },


                ]
            }

        }
      

```
使用方法：  <EchartComponent echartData={chartOption}></EchartComponent>





```


class LeanLeft extends PureComponent {
constructor(props) {
super(props);
this.state = {};
}

onChange = (value) => {
console.log(`selected ${value}`);
};

onSearch = (value) => {
console.log('search:', value);
};

render() {
const { roofDataList } = this.props;

return (
<LeftDiv>
    <BorderRadiusBox1>
        <div style={{ width: '5rem' }}>
        <ModuleTitle>
            <span>全国立体车库</span>
        </ModuleTitle>
        {/* 引入 select */}
        <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={this.onChange}
                onSearch={this.onSearch}
        // filterOption={(input, option) =>
              //   (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              // }
        >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
        </Select>
        </div>
    </BorderRadiusBox1>
</LeftDiv>
);
}
}

export default LeanLeft;


```

``` 

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

class LeanLeft extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {roofDataList} = this.props;

    return (
      <LeftDiv>
        <BorderRadiusBox1>
          <div style={{width: '5rem'}}>
            <ModuleTitle>
              <span>全国立体车库</span>
            </ModuleTitle>
            {/* 引入 select */}
            <Select
              defaultValue="lucy"
              style={{
                width: 200,
              }}
              onChange={handleChange}
              options={[
                {
                  label: 'Manager',
                  options: [
                    {
                      label: 'Jack',
                      value: 'jack',
                    },
                    {
                      label: 'Lucy',
                      value: 'lucy',
                    },
                  ],
                },
                {
                  label: 'Engineer',
                  options: [
                    {
                      label: 'yiminghe',
                      value: 'Yiminghe',
                    },
                  ],
                },
              ]}
            />
          </div>
        </BorderRadiusBox1>
      </LeftDiv>
    );
  }
}

export default LeanLeft;

```



```

  // 水球柱状图配置
        const chartOption = {

            chartStyle: {
                width: "3.65rem",
                height: "1.7rem",
            },
            option:{
                "title": [{
                    "text": "应收15154元",
                    "top": 5,
                    "left": "center",
                    "textStyle": {
                        "fontSize": 17,
                        "fontWeight": 600,
                        "color": "#fff"
                    }
                },{
                    "text": "已收14954元",
                    "bottom": -8,
                    "left": "center",
                    "textStyle": {
                        "fontSize": 15,
                        "fontWeight": 600,
                        "color": "#fff"
                    },

                }],
                "tooltip": {
                    "trigger": "item",
                    "textStyle": {
                        "color": "#fff"
                    },
                    "formatter": function (value) {
                        return value.seriesName + ': ' + value.data * 100 + '%';
                    }
                },
                "series": [{
                    "type": "liquidFill",
                    "name": "实收占比",
                    "radius": "62%",
                    "center": ["50%", "60%"],
                    "shape": "circle",
                    "phase": 0,
                    "direction": "right",
                    "outline": {
                        "show": true,
                        "borderDistance": 0,
                        "itemStyle": {
                            "opacity": 1,
                            "borderWidth": 1,
                            "shadowBlur": 1,
                            "shadowColor": "#fff",
                            "borderColor": "#41dcd8"
                        }
                    },
                    "itemStyle": {
                        "color": "#4077eb",
                        "opacity": 0.5,
                        "shadowBlur": 10
                    },
                    "backgroundStyle": {
                        "color": "#407bf3",
                        "opacity": 0.5
                    },
                    "emphasis": {
                        "itemStyle": {
                            "opacity": 0.8
                        }
                    },
                    "label": {
                        "fontSize": 15,
                        "fontWeight": 400,
                        "color": "#fff"
                    },
                    "data": [0.82]
                }]
            }


        }

```