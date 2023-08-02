import React, {PureComponent} from "react";
import {Space, Table, Tag} from 'antd';
import {DataTableDiv, SolitaireCardDiv} from "../style";

class SolitaireCard extends PureComponent {
    render() {
        const tableData = {
            columns: [
                {
                    title: '城市',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '停车场数量',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '总车位数',
                    dataIndex: 'address',
                    key: 'address',
                },
            ],
            data: [
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                },
                {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                },
                {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sydney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                },
            ],
            title: '全国停车场分布',
        };
        const { solitaireCardData } = this.props;
        const limit = solitaireCardData.limit;
        const list = solitaireCardData.list;

        // 将list数组按照limit进行分组
        const groups = [];
        for (let i = 0; i < list.length; i += limit) {
            groups.push(list.slice(i, i + limit));
        }

        return (
            <SolitaireCardDiv>
                    {/* 遍历分组，并为每个分组创建一个Space组件 */}
                    {groups.map((group, index) => (
                        <Space key={index} size={16}>
                            {/* 遍历分组中的元素，并创建div */}
                            {group.map((item, idx) => (
                                <div key={idx}>
                                    {/* 标题 */}
                                    <h3>{item.title}</h3>
                                    {/* 描述 */}
                                    <p>{item.content}</p>
                                </div>
                            ))}
                        </Space>
                    ))}

            </SolitaireCardDiv>
        );
    }
}

export default SolitaireCard;
