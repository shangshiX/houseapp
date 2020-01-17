import React, { Component } from 'react'
import { List } from "antd-mobile"
import "./Mine.scss"

const Item = List.Item;
export default class Mine extends Component {
    state = {
        mylist1: [
            { icon: "integral.png", name: "我的积分" },
            { icon: "subscibe.png", name: "我的订阅" },
            { icon: "contacts.png", name: "微聊联系人" },
            { icon: "" },
            { icon: "counter.png", name: "房贷计算器" },
            { icon: "myhouse.png", name: "我的房子" },
            { icon: "" },
            { icon: "history_my.png", name: "我的看房记录" },
            { icon: "my.png", name: "我的问答" },
            { icon: "" },
            { icon: "integral.png", name: "设置" },
            { icon: "feedback.png", name: "意见反馈" },
        ],


    }
    render() {
        let { mylist1, mylist2, mylist3, mylist4 } = this.state
        return (
            <div className="tatolbox">
                <div className="topbox">
                    <div className="top">
                        <div className="leftbox">
                            <div className="avabox">
                                <img src={require("../../../assets/images/avator.jpg")} />
                            </div>
                            <div className="title">
                                <h3><span onClick={this.loginbtn}>登录</span>/<span onClick={this.regbtn}>注册</span></h3>
                                <p>可以与经纪人发起聊天</p>
                            </div>
                        </div>
                        <img src={require("../../../assets/images/topset.png")} className="topset" />
                    </div>
                    <div className="bottom">
                        <div className="bottombox">
                            <div className="num">
                                0
                            </div>
                            <div className="btombox">
                                <div className="imgbox">
                                    <img src={require("../../../assets/images/money_top.png")} />
                                </div>
                                <div className="ltitle">钱包</div>
                            </div>
                        </div>
                        <div className="bottombox">
                            <div className="num">
                                0
                            </div>
                            <div className="btombox">
                                <div className="imgbox">
                                    <img src={require("../../../assets/images/discounts_top.png")} />
                                </div>
                                <div className="ltitle">优惠</div>
                            </div>
                        </div>
                        <div className="bottombox">
                            <div className="num">
                                0
                            </div>
                            <div className="btombox">
                                <div className="imgbox">
                                    <img src={require("../../../assets/images/integral_top.png")} />
                                </div>
                                <div className="ltitle">积分</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mainbox">
                    <div className="box">
                        <List>
                            {
                                mylist1.map((obj,i) => {
                                    if (obj.icon != "") return (
                                        <Item
                                            key={obj.name}
                                            thumb={require("../../../assets/images/" + obj.icon)}
                                            arrow="horizontal"
                                            onClick={() => { }}
                                        >{obj.name}</Item>)
                                    else return <div style={{ height: 10, backgroundColor: "#f4f4f4" }} key={i}></div>
                                })
                            }
                        </List>
                    </div>
                </div>
            </div>
        )
    }

    loginbtn = () => {
        window.location.href = "#/login"
    }

    regbtn = () => {
        window.location.href = "#/reg"
    }
}
