import React, {PureComponent} from 'react';
import Chart from '../../../../utils/chart';
import {trafficOptions} from './options';

class SwitchBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            renderer: 'canvas',
        };
    }

    render() {
        const {switchData} = this.props;
        return (
            <div>
            </div>
        );
    } //endrender
}

export default SwitchBox;
