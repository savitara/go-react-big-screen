import React, {PureComponent} from 'react';
import Chart from '../../../utils/chart';
import {PersonnelAndEquipmentStatusOptions} from './options';
import {PersonnelStatusOptions} from './options';
import {EquipmentStatusOptions} from './options';


class PersonnelAndEquipmentStatus extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            renderer: 'canvas',
        };
    }

    render() {
        const {renderer} = this.state;
        const {statusData} = this.props;

        const equipmentOption = EquipmentStatusOptions(
            statusData.equipmentStatus.online,
            statusData.equipmentStatus.offline,
            statusData.equipmentStatus.onlineText,
            statusData.equipmentStatus.onofflineText);

        const personnelOption = PersonnelStatusOptions(
            statusData.personnelStatus.onDuty,
            statusData.personnelStatus.ffDuty,
            statusData.personnelStatus.onDutyText,
            statusData.personnelStatus.ffDutyText
        );
        return (
            <div>
                {/* 在岗人员图表 */}
                <div style={{width: '50%', height: '2.875rem', display: 'inline-block'}}>
                    <Chart renderer={renderer} option={personnelOption}/>
                </div>
                {/* 设备状态图表 */}
                <div style={{width: '50%', height: '2.875rem', display: 'inline-block'}}>
                    <Chart renderer={renderer} option={equipmentOption}/>
                </div>
            </div>
        );
    }
}

export default PersonnelAndEquipmentStatus;
