import React, { PureComponent } from 'react';
import Chart from '../../../utils/chart';
import { PersonnelAndEquipmentStatusOptions } from './options';
import { PersonnelStatusOptions } from './options';
import { EquipmentStatusOptions } from './options';



class PersonnelAndEquipmentStatus extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
    };
  }

  render() {
    const { renderer } = this.state;
    // 真实的在岗人数、离岗人数、在线设备数和离线设备数
    const onDutyPersonnel = [320];
    const offDutyPersonnel = [100];
    const onlineEquipment = [1200];
    const offlineEquipment = [30];

    const equipmentOption = EquipmentStatusOptions(
       onlineEquipment,
      offlineEquipment,
      '在线设备数',
      '离线设备数'
    );
    
    const personnelOption = PersonnelStatusOptions(
      onDutyPersonnel,
      offDutyPersonnel,
      '在岗人数',
      '离岗人数'
    );
    return (
      <div>
        {/* 在岗人员图表 */}
        <div style={{ width: '50%', height: '2.875rem', display: 'inline-block' }}>
          <Chart renderer={renderer} option={personnelOption} />
        </div>
        {/* 设备状态图表 */}
        <div style={{ width: '50%', height: '2.875rem', display: 'inline-block' }}>
          <Chart renderer={renderer} option={equipmentOption} />
        </div>
      </div>
    );
  }
}

export default PersonnelAndEquipmentStatus;
