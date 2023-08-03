import React, {PureComponent} from "react";
import {BorderRadiusBox1, BorderRadiusBox2, DataCard, DataCardDiv, LeftDiv, ModuleTitle} from "../style";
import DataTable from "../charts/DataTable";
import SolitaireCard from "../charts/SolitaireCard";
import SolitaireChart from "../charts/SolitaireChart";
import DynamicChart from "../charts/DynamicChart";

class BoxData extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {title, dataTableData, solitaireCardData, solitaireChartData,dynamicChartData} = this.props;
        console.log(dataTableData)
        let solitaireChartDataList=solitaireChartData.list
        let dynamicChartDataList=dynamicChartData.list
        return (

            <DataCardDiv>
                <div className={'container'}>
                    <ModuleTitle>
                        {/*<i className='iconfont'>&#xe88e;</i>*/}
                        <span>{title}</span>
                    </ModuleTitle>
                </div>

                <BorderRadiusBox1>

                    {dataTableData &&(
                        <BorderRadiusBox2>
                            <DataTable tableData={dataTableData}></DataTable>

                        </BorderRadiusBox2>
                    )}


                    <div style={{display: 'flex'}}>
                        {/*可能需要动态处理*/}
                        <BorderRadiusBox2>
                            <div style={{display: 'flex'}}>
                                {/*卡片*/}
                                    {solitaireCardData && (
                                        <BorderRadiusBox2>
                                        <SolitaireCard solitaireCardData={solitaireCardData} >
                                        </SolitaireCard>
                                        </BorderRadiusBox2>
                                    )}


                                {/*图表*/}
                                    {solitaireChartDataList && solitaireChartDataList.map((item, index) => (
                                        <BorderRadiusBox2>
                                        <SolitaireChart solitaireChartData={item} key={index}>
                                        </SolitaireChart>
                                        </BorderRadiusBox2>

                                    ))}
                            </div>

                        </BorderRadiusBox2>
                    </div>


                    <div style={{display: 'flex'}}>

                        {dynamicChartDataList && dynamicChartDataList.map((item, index) => (
                            <BorderRadiusBox2>
                                <DynamicChart dynamicChartData={item} key={index}></DynamicChart>

                            </BorderRadiusBox2>
                        ))}
                    </div>
                </BorderRadiusBox1>
            </DataCardDiv>

        );
    }
}

export default BoxData;
