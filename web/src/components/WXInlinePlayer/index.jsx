import {PureComponent} from "react";
import {connect} from "dva";
import WxInlinePlayer from 'wx-inline-player-new';
class index extends PureComponent {
    render() {
        return (
            <div>
                <div>
                    <WxInlinePlayer
                        src="rtsp://192.168.10.189/live/mainstream_0"
                        autoplay={true}
                        onHide={() => console.log('Player hidden')}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
