import React, { PureComponent } from 'react';
import Chart from '../../../../utils/chart';
import { trafficOptions } from './options';

class TrafficSituation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
    };
  }

  render() {
    const { renderer } = this.state;
    const { trafficSitua } = this.props;
    return (
      <div
        style={{
          // width: '5.375rem',
          // height: '3.125rem',
          width: '4.3rem', /* Scale down width to 80% */
          height: '2.5rem', /* Scale down height to 80% */
        }}>
        {trafficSitua ? (
          <Chart renderer={renderer} option={trafficOptions(trafficSitua)} />
        ) : (
          ''
        )}
      </div>
    );
  } //endrender
}

export default TrafficSituation;
