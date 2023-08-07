import React, {PureComponent} from 'react';
import {ModuleTitle, LeftDiv, DataBox, BorderRadiusBox1, CenterDiv} from '../style';
import EchartComponent from "../../../homePage/centerPage/charts/EchartComponent";
import Chart from "../../../../utils/chart";
import AaLiMap from "../charts/AaLiMap";
import {Button, Checkbox, Menu, Select} from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import Search from "antd/es/input/Search";
import {getDataFromFullUrl} from "../../../../utils/axiosRequest";

const ALiMapSearchUrl = 'https://restapi.amap.com/v5/place/text'
const ALiMapSearchKey = '4a182bb48419ece31031dd0f02e1857a'

class LeanLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.aMapRef = React.createRef();
        this.state = {
            showMenu: false,
            aMapOption: null,
            checkboxes: {
                heatmap: true,
                garage: true,
                charging: true,
                parking: true,
            },
            aMapOptionCacheHeatmap: null,
            centerPotion: {
                longitude: null,
                latitude: null
            }
        };
    }

    handleToggleMenu = () => {
        this.setState((prevState) => ({
            showMenu: !prevState.showMenu,
        }));
    };

    handleCheckboxChange = (checkboxName) => {
        this.setState((prevState) => ({
            checkboxes: {
                ...prevState.checkboxes,
                [checkboxName]: !prevState.checkboxes[checkboxName],
            },
        }));
        console.log(checkboxName)
        console.log(this.state.checkboxes[checkboxName])
        // 热力图
        if (checkboxName === 'heatmap') {
            // 不选中热力图
            if (this.state.checkboxes[checkboxName] === true) {
                let option = this.state.aMapOption;
                this.setState({
                    aMapOptionCacheHeatmap: option.heatmapPluginProps
                })
                delete option.heatmapPluginProps
                this.setState({
                    aMapOption: option
                })

                console.log('111', this.state.aMapOptionCacheHeatmap)

            } else {
                console.log('222', this.state.aMapOptionCacheHeatmap)

                let option = this.state.aMapOption;
                option.heatmapPluginProps = this.state.aMapOptionCacheHeatmap
                this.setState({
                    aMapOption: option
                })
            }

            if (this.aMapRef) {
                this.aMapRef.current.childMethod(this.state.aMapOption);
            }
        }
        // 车库
        if(checkboxName === 'garage'){
            if (this.state.checkboxes[checkboxName] === true) {
                let option = this.state.aMapOption;
                let markersList = option.markersList;
                for(let i=0;i<markersList.length;i++){
                    if(markersList[i].markerType==='garage'){
                        markersList[i].visible = false;
                    }
                }
                option.markersList = markersList;

                this.setState({
                    aMapOption: option
                })
            } else {
                let option = this.state.aMapOption;
                let markersList = option.markersList;
                for(let i=0;i<markersList.length;i++){
                    if(markersList[i].markerType==='garage'){
                        markersList[i].visible = true;
                    }
                }
                option.markersList = markersList;

                this.setState({
                    aMapOption: option
                })
            }
            if (this.aMapRef) {
                this.aMapRef.current.childMethod(this.state.aMapOption);
            }
        }
        // 充电桩
        if(checkboxName ==='charging'){
            if (this.state.checkboxes[checkboxName] === true) {
                let option = this.state.aMapOption;
                let markersList = option.markersList;
                for(let i=0;i<markersList.length;i++){
                    if(markersList[i].markerType==='charging'){
                        markersList[i].visible = false;
                    }
                }
                option.markersList = markersList;

                this.setState({
                    aMapOption: option
                })
            } else {
                let option = this.state.aMapOption;
                let markersList = option.markersList;
                for(let i=0;i<markersList.length;i++){
                    if(markersList[i].markerType==='charging'){
                        markersList[i].visible = true;
                    }
                }
                option.markersList = markersList;

                this.setState({
                    aMapOption: option
                })
            }
            if (this.aMapRef) {
                this.aMapRef.current.childMethod(this.state.aMapOption);
            }
        }
        if(checkboxName==='parking'){
            if (this.state.checkboxes[checkboxName] === true) {
                let option = this.state.aMapOption;
                let markersList = option.markersList;
                for(let i=0;i<markersList.length;i++){
                    if(markersList[i].markerType==='parking'){
                        markersList[i].visible = false;
                    }
                }
                option.markersList = markersList;

                this.setState({
                    aMapOption: option
                })
            } else {
                let option = this.state.aMapOption;
                let markersList = option.markersList;
                for(let i=0;i<markersList.length;i++){
                    if(markersList[i].markerType==='parking'){
                        markersList[i].visible = true;
                    }
                }
                option.markersList = markersList;

                this.setState({
                    aMapOption: option
                })
            }
            if (this.aMapRef) {
                this.aMapRef.current.childMethod(this.state.aMapOption);
            }
        }
    };

    onSearch = async (value) => {
        console.log(value);
        if (value !== '') {
            await getDataFromFullUrl(ALiMapSearchUrl, {
                keywords: value,
                key: ALiMapSearchKey,
            }, (data) => {
                console.log(data)
                if (data.pois) {
                    let locationList = data.pois[0].location.split(',')
                    this.setState({
                        centerPotion: {
                            longitude: locationList[0],
                            latitude: locationList[1]
                        }
                    })
                    if (this.aMapRef) {
                        this.aMapRef.current.childMethodOfSearch(this.state.centerPotion);
                    }
                }
            })
        }
    }
    onSearchByPressEnter = async (event) => {
        console.log(event.target.value);
        if (event.target.value !== '') {
            await getDataFromFullUrl(ALiMapSearchUrl, {
                keywords: event.target.value,
                key: ALiMapSearchKey,
            }, (data) => {
                console.log(data)
                if (data.pois) {
                    let locationList = data.pois[0].location.split(',')
                    this.setState({
                        centerPotion: {
                            longitude: locationList[0],
                            latitude: locationList[1]
                        }
                    })
                    if (this.aMapRef) {
                        this.aMapRef.current.childMethodOfSearch(this.state.centerPotion);
                    }
                }
            })
        }
    };
    handlePlaceSelected = (place) => {
        console.log('选择的位置:', place);
        // 处理选择的位置数据
    }

    render() {
        const {dataCenter} = this.props;
        let option = null;
        let chartContainerStyle = null;
        let chartStyle = null;
        if (dataCenter) {
            option = dataCenter.chart.chartOption.option
            // TODO 判断现在的选择框是否选中显示

            chartContainerStyle = dataCenter.chart.chartOption.chartContainerStyle;
            chartStyle = dataCenter.chart.chartOption.chartStyle;
        }
        this.setState({
            aMapOption: option
        })
        const {showMenu, checkboxes} = this.state;
        return (
            <CenterDiv>
                <BorderRadiusBox1>
                    {this.state.aMapOption && (
                        <div style={chartContainerStyle}>
                            <div style={chartStyle}>
                                <div style={{position: 'relative'}}>

                                    {/*<Search*/}
                                    {/*    placeholder="搜索城市"*/}
                                    {/*    allowClear*/}
                                    {/*    onSearch={this.onSearch}*/}
                                    {/*    onPressEnter={this.onSearchByPressEnter}*/}
                                    {/*    style={{*/}
                                    {/*        width: 150,*/}
                                    {/*        position: 'absolute', top: 0, zIndex: 999*/}
                                    {/*    }}*/}
                                    {/*/>*/}


                                    <AaLiMap ref={this.aMapRef} option={this.state.aMapOption}/>
                                    {showMenu ? (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                zIndex: 999,
                                                width: '200px',
                                                backgroundColor: '#fff',
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                                padding: '10px',
                                            }}
                                        >
                                            <Menu>
                                                <MenuItem>
                                                    <Checkbox
                                                        checked={checkboxes.heatmap}
                                                        onChange={() => this.handleCheckboxChange('heatmap')}
                                                    >
                                                        停车热力图
                                                    </Checkbox>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Checkbox
                                                        checked={checkboxes.garage}
                                                        onChange={() => this.handleCheckboxChange('garage')}
                                                    >
                                                        立体车库
                                                    </Checkbox>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Checkbox
                                                        checked={checkboxes.charging}
                                                        onChange={() => this.handleCheckboxChange('charging')}
                                                    >
                                                        充电桩
                                                    </Checkbox>
                                                </MenuItem>
                                                <MenuItem>
                                                    <Checkbox
                                                        checked={checkboxes.parking}
                                                        onChange={() => this.handleCheckboxChange('parking')}
                                                    >
                                                        停车场
                                                    </Checkbox>
                                                </MenuItem>
                                            </Menu>
                                        </div>

                                    ) : null}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            right: showMenu ? '200px' : 0,
                                            zIndex: 999,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '0.4rem',
                                            height: '0.7rem',
                                            backgroundColor: '#fff',
                                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                            cursor: 'pointer',
                                        }}
                                        onClick={this.handleToggleMenu}
                                    >
                                        {showMenu ? '<' : '>'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </BorderRadiusBox1>
            </CenterDiv>
        );
    }

}

export default LeanLeft;
