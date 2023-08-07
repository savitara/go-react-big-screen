import React, {PureComponent} from 'react';
import {ModuleTitle, LeftDiv, DataBox, BorderRadiusBox1} from '../style';


import PlayerComponent from "./PlayerT";


class LeanLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {roofDataList} = this.props;
        const config = {
            data: [55],
            shape: 'round'
        }
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
        const optionIntegrityRate = {
            series: [{
                type: 'liquidFill',
                data: [0.6]
            }]
        };
        return (

            <LeftDiv>

                {/*<BorderBox12 className='left-top-borderBox12'  style={{ marginLeft: 0 }}>*/}
                {/*    <div className='left-top'>*/}
                {/*        <ModuleTitle>*/}
                {/*            <i className='iconfont'>&#xe78f;</i>*/}
                {/*            <span>路段实时视频</span>*/}
                {/*        </ModuleTitle>*/}
                {/*        <DataBox>*/}
                {/*            /!*<div className='detail-list'>*!/*/}
                {/*            /!*    {roofDataList && roofDataList.map((item, index) => (*!/*/}
                {/*            /!*        <div className='detail-list-item' key={index}>*!/*/}
                {/*            /!*            <img*!/*/}
                {/*            /!*                src={require(`../../../assets/images/center-details-data${index + 1}.png`)}*!/*/}
                {/*            /!*                alt={item.title}*!/*/}
                {/*            /!*            />*!/*/}
                {/*            /!*        </div>*!/*/}
                {/*            /!*    ))}*!/*/}
                {/*            /!*</div>*!/*/}
                {/*        </DataBox>*/}

                {/*    </div>*/}
                {/*</BorderBox12>*/}

                <BorderRadiusBox1>
                    <div style={{width: '5rem'}}>
                        <ModuleTitle>
                            <i className='iconfont'>&#xe78f;</i>
                            <span>路段实时视频</span>
                        </ModuleTitle>
                        <div>
                        {/*<WXInlinePlayer></WXInlinePlayer>*/}

                          {/*<VLCPlayer*/}
                          {/*  style={{width: '200px', height: '200px'}}*/}
                          {/*  videoAspectRatio="16:9"*/}
                          {/*  source={{ uri: "https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4"}}*/}
                          {/*/>*/}
                          {/*<H265PlayerComponent></H265PlayerComponent>*/}
                         {/*<PlayerComponent></PlayerComponent>*/}
                        </div>

                    </div>



                </BorderRadiusBox1>
            </LeftDiv>


        );
    }
}

export default LeanLeft;
