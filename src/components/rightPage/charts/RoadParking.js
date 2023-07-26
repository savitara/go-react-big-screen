import React, { PureComponent } from 'react';
import Chart from '../../../utils/chart';
import { RoadParkingOptions } from './options';

class RoadParking extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
      option: '',
    };
  }

  render() {
    const { renderer } = this.state;
    const { RoadParking } = this.props;
    return (
      <div
        style={{
          width: '5.375rem',
          height: '2.875rem',
        }}>
        <Chart
          renderer={renderer}
          option={RoadParkingOptions(RoadParking)}
        />
        ;
      </div>
    );
  }
}

export default RoadParking;
