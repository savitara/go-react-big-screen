import React, {PureComponent} from 'react';
import Chart from '../../../../utils/chart';
import {trafficOptions} from './options';

class CellBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            renderer: 'canvas',
        };
    }

    render() {
        const {cellData} = this.props;
        return (
            <div>
            </div>
        );
    } //endrender
}

export default CellBox;
