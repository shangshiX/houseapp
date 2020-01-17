import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { Flex, InputItem, WingBlank, Button, WhiteSpace,Toast } from "antd-mobile"
import "./login.scss"
import {login} from "../../api/apis"

export default class Login extends Component {
    state = {
        user: "",
        password: "",
        olduser:"",
        oldpwd:""
    }
    render() {
        let { user, password } = this.state
        return (
            <div>
                <Flex justify="center">
                    <div style={{height:200,marginTop:50}}>
                        <img src={require('../../assets/images/logo.png')} className="loginLogo" />
                    </div>
                </Flex>

                <WingBlank>
                    <InputItem
                        placeholder="请输入用户名"
                        value={user}
                        onChange={(val) => { this.setState({ user: val }) }}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <InputItem
                        placeholder="请输入密码"
                        value={password}
                        type="password"
                        onChange={(val) => { this.setState({ password: val }) }}

                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/password.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>

                    <WhiteSpace size="xl" />
                    <Button className="LoginBtn" activeClassName="loginbtn" onClick={this.loginBtn}>登录</Button>

                    <WhiteSpace size="lg" />
                    <Flex justify="between">
                        <Link to="/reg" className="Loginfont">手机快速注册</Link>
                        <Link to="/forgetpwd" className="Loginfont">忘记密码？</Link>
                    </Flex>
                </WingBlank>
            </div>
        )
    }

    loginBtn = async () => {
        let user = this.state.user
        let password = this.state.password
        let olduser = this.state.olduser
        let oldpwd = this.state.oldpwd


        if(olduser===user && oldpwd===password) return

        this.setState({
            olduser:user,
            oldpwd:password
        })


        let val = await login(this.state.user,this.state.password)
            if(val.data==="ok"){
                window.location.href = "#/"
            }else{
                Toast.fail('请输入正确的用户名和密码')
            }
    }
}
