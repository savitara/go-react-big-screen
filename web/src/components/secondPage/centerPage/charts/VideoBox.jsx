import React, {PureComponent} from 'react';


class VideoBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            renderer: 'canvas',
        };
    }

    render() {
        const {data, centerText} = this.props;
        const {renderer} = this.state; // 获取 renderer 的值

        return (

            <div>

            </div>

        );
    }
}

export default VideoBox;
