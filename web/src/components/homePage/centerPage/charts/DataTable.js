import React, {PureComponent} from "react";
import {Space, Table, Tag} from 'antd';
import {DataTableDiv} from "../style";

class DataTable extends PureComponent {
    render() {
        const {tableData} = this.props;
        return (
            <>
                <DataTableDiv>
                    <div className={'title'}>{tableData.title}
                    </div>
                    <Table
                        columns={tableData.columns}
                        dataSource={tableData.data}
                        pagination={false}
                    />
                </DataTableDiv>

            </>
        );
    }
}

export default DataTable;
