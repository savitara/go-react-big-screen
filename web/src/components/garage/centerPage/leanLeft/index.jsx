import React, {PureComponent} from 'react';
import {
  ModuleTitle,
  LeftDiv,
  DataBox,
  BorderRadiusBox1
} from '../style';
import {Select, TreeSelect} from 'antd';
import {getTest} from '../../../../services';

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: (
              <b
                style={{
                  color: '#08c',
                }}
              >
                leaf3
              </b>
            ),
          },
        ],
      },
    ],
  },
];

class LeanLeft extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sptdd: '123', // 初始化sptdd为固定字符串
    };
  }

  handleTreeSelectChange = (value) => {
    this.setState({sptdd: value}); // 更新sptdd的值
    this.props.onValueChange(value); // 调用父组件传递的回调函数，并将更新后的值作为参数传递
  };

  render() {
    const {sptdd} = this.state; // 从state中获取sptdd
    const {mess} = this.props; // 从state中获取sptdd

    console.log(mess)
    return (
      <LeftDiv>
        <BorderRadiusBox1>
          <div style={{width: '5rem'}}>
            <ModuleTitle>
              <span>全国立体车库</span>
              {/*<p>{sptdd}</p> /!* 在页面上展示sptdd的值 *!/*/}
              <p>
                {mess}
              </p>
            </ModuleTitle>

            {/* 在这里添加TreeSelect组件 */}
            <TreeSelect
              showSearch
              style={{
                width: '100%',
              }}
              dropdownStyle={{
                maxHeight: 400,
                overflow: 'auto',
              }}
              placeholder="Please select"
              allowClear
              treeDefaultExpandAll
              treeData={treeData}
              onChange={this.handleTreeSelectChange}
            />
          </div>
        </BorderRadiusBox1>
      </LeftDiv>
    );
  }
}

export default LeanLeft;
