import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { WingBlank, InputItem, WhiteSpace, Button, Checkbox } from "antd-mobile"
import "./Reg.scss"
import {reg} from "../../api/apis"


export default class Reg extends Component {
    state={
        phone:"",
        password:"",
        oldphone:"",
        oldpwd:""
    }
    render() {
        let {phone,password} = this.state
        return (
            <div>
                <WhiteSpace size="lg" />
                <WingBlank>
                    <InputItem
                        clear
                        placeholder="请输入手机"
                        value={phone}
                        onChange={(val)=>this.setState({phone:val})}
                    />
                    <InputItem
                        clear
                        placeholder="请输入密码"
                        value={password}
                        onChange={(val)=>this.setState({password:val})}
                    />
                    <InputItem
                        clear
                        placeholder="请输入验证码"
                        extra="获取验证码"
                    />

                    <WhiteSpace size="xl" />
                    <Checkbox data-seed="logId" onChange={e => e}>
                        我已同意
                        <Link to="/service">《用户服务协议》</Link>
                        及
                        <Link to="/privacy">《隐私权政策》</Link>
                    </Checkbox>
                    <WhiteSpace size="xl" />
                    <Button className="RegBtn" activeClassName="regbtn" onClick={this.clickReg}>注册</Button>
                    <WhiteSpace size="lg" />
                    <Link to="/login" className="Regfont">已有帐号</Link>
                </WingBlank>
            </div>
        )
    }

    clickReg = async () => {
        let val = await reg(this.state.phone,this.state.password)
        if(val.data==="ok"){
            window.location.href = "#/login"
        }
    }
}
