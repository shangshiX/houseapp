import React, { Component } from 'react'
import "./Chat.scss"
import { Button, WingBlank } from "antd-mobile"

export default class Chat extends Component {
    render() {
        return (
            <div className="box">
                <div className="chatbox">
                    <div className="ava">
                        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1640434779,3971610929&fm=26&gp=0.jpg" />
                    </div>
                    <div>
                        <p>职业顾问：<span style={{ color: "#0967C7", fontSize: 18 }}>张小妹</span></p>
                        <p>专业服务 诚信做人 诚心做事</p>
                    </div>
                    <WingBlank>
                        <Button type="primary">我要聊天</Button>
                    </WingBlank>
                </div>
            </div>
        )
    }
}
