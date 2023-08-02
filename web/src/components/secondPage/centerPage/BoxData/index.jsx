import React, {PureComponent} from "react";
import {BorderRadiusBox1, BorderRadiusBox2, LeftDiv, ModuleTitle} from "../style";

class BoxData extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {roofDataList} = this.props;
        const title = '封闭停车场'
        return (

            <>
                <div>
                    {title}
                </div>
                <BorderRadiusBox1>

                    <BorderRadiusBox2>


                    </BorderRadiusBox2>
                    <div style={{display: 'flex'}}>
                        {/*可能需要动态处理*/}
                        <BorderRadiusBox2>


                        </BorderRadiusBox2>
                    </div>


                    <div style={{display: 'flex'}}>
                        <BorderRadiusBox2>

                        </BorderRadiusBox2>
                        <BorderRadiusBox2>

                        </BorderRadiusBox2>
                        <BorderRadiusBox2>

                        </BorderRadiusBox2>
                    </div>
                </BorderRadiusBox1>
            </>

        );
    }
}

export default BoxData;
