import React, { PureComponent } from 'react';
import Chart from '../../../../utils/chart';
import { OfflinePortalOptions } from './options';

class OfflinePortal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
    };
  }

  render() {
    const { renderer } = this.state;
    const { offlinePortalData } = this.props;

    return (

      <div
          style={{
              width: '2.6875rem', // 缩小为原来的一半
              height: '1.4375rem', // 缩小为原来的一半
          }}
      >
        <Chart
          renderer={renderer}
          option={OfflinePortalOptions(offlinePortalData)}
        />
      </div>
    );
  }
}

export default OfflinePortal;
