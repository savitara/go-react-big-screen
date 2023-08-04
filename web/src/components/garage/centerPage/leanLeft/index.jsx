import React, {PureComponent} from 'react';
import {
  ModuleTitle,
  LeftDiv,
  DataBox,
  BorderRadiusBox1
} from '../style';
import {Select} from 'antd';
import {getTest} from '../../../../services';

const {Option} = Select;

class LeanLeft extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sptdd: 'asdasfafas', // 初始化sptdd为空字符串
    };
  }

  componentDidMount() {
    getTest().then((res) => {
      console.log(res);
      // this.setState({sptdd: res.message}); // 将获取的数据赋值给sptdd
    });
  }

  handleChange = (value) => {
    console.log(`selected ${value}`);
    getTest().then((res) => {
      console.log(res);
      this.setState({sptdd: res.message}); // 将获取的数据赋值给sptdd
    });
    // 在这里执行handleChange的逻辑
  };

  render() {
    const {roofDataList} = this.props;
    const {sptdd} = this.state; // 从state中获取sptdd

    return (
      <LeftDiv>
        <BorderRadiusBox1>
          <div style={{width: '5rem'}}>
            <ModuleTitle>
              <span>全国立体车库</span>
              <p>{sptdd}</p> {/* 在页面上展示sptdd的值 */}
            </ModuleTitle>
            {/* 引入 select */}
            <Select
              defaultValue="lucy"
              style={{
                width: 200,
              }}
              onChange={this.handleChange}
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
