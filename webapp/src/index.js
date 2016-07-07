import React from 'react';
import ReactDOM from 'react-dom';

import { Timeline, Icon } from 'antd';


class Main extends React.Component {
    render() {
        return (
            <Timeline>
                <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
                <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">技术测试异常 2015-09-01</Timeline.Item>
                <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
            </Timeline>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('content'));