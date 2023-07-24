import React, { PureComponent } from 'react';
import { CapsuleChart } from '@jiaminghi/data-view-react';

class PersonnelAndEquipmentStatus extends PureComponent {
  render() {
    const { userIdentityCategory } = this.props;

    if (!userIdentityCategory || !userIdentityCategory.data) {
      // If userIdentityCategory or its data property is undefined, return null or a message
      return <div>暂无数据。</div>;
    }

    // 假设路段的最大车位数为 1000
    const maxParkingSpaces = 1000;

    const config = {
      // 单位
      unit: '（车位）',
      showValue: true,
      data: userIdentityCategory.data.map((item) => ({
        name: item.name,
        value: item.used,
        total: item.total,
      })),
    };

    const customStyle = {
      // 在这里定义前后段使用的颜色
      frontColor: 'red',
      backColor: 'green',
    };

    return (
      <div style={{ position: 'relative', marginBottom: '10px' }}>
        <CapsuleChart
          config={config}
          style={{
            width: '5.85rem',
            height: '2.625rem',
          }}
          customStyle={customStyle}
        />
        {/* 图示说明 */}
        {/* <div style={{ position: 'absolute', top: '5px', right: '5px', textAlign: 'right', fontSize: '12px', zIndex: 1, color: 'white' }}>
          <span style={{ display: 'inline-block', marginRight: '10px' }}>
            <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: customStyle.frontColor, marginRight: '5px' }}></span>
            已用车位
          </span>
          <span style={{ display: 'inline-block' }}>
            <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: customStyle.backColor, marginRight: '5px' }}></span>
            剩余车位
          </span>
        </div> */}
      </div>
    );
  }
}



export default PersonnelAndEquipmentStatus;
