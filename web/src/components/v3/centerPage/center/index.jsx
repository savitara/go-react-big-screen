import React, {PureComponent} from 'react';
import {ModuleTitle, LeftDiv, DataBox, BorderRadiusBox1, CenterDiv} from '../style';
import EchartComponent from "../../../homePage/centerPage/charts/EchartComponent";
import Chart from "../../../../utils/chart";
import AaLiMap from "../charts/AaLiMap";
import {Button, Checkbox, Menu, Select} from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import Search from "antd/es/input/Search";

class LeanLeft extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            checkboxes: {
                heatmap: false,
                garage: false,
                charging: false,
                parking: false,
            },
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
    };

    onSearch = (value) => {
        console.log(value);
        if (value !== '') {

        }
    }
    onSearchByPressEnter = (event) => {
        console.log(event.target.value);
        if (event.target.value !== '') {
        }
    };


    render() {
        const {dataCenter} = this.props;
        let option = null;
        let chartContainerStyle = null;
        let chartStyle = null;
        if (dataCenter) {
            option = dataCenter.chart.chartOption.option;
            chartContainerStyle = dataCenter.chart.chartOption.chartContainerStyle;
            chartStyle = dataCenter.chart.chartOption.chartStyle;
        }
        const {showMenu, checkboxes} = this.state;

        return (
            <CenterDiv>
                <BorderRadiusBox1>
                    {option && (
                        <div style={chartContainerStyle}>
                            <div style={chartStyle}>
                                <div style={{position: 'relative'}}>

                                    {/*<Select style={{ position: 'absolute', top: 0, zIndex: 999 }}></Select>*/}
                                    <Search
                                        placeholder="搜索城市"
                                        allowClear
                                        onSearch={this.onSearch}
                                        onPressEnter={this.onSearchByPressEnter}
                                        style={{
                                            width: 150,
                                            position: 'absolute', top: 0, zIndex: 999
                                        }}
                                    />
                                    <AaLiMap option={option}/>
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
