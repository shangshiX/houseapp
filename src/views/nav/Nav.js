import React, { Component } from 'react'
import { TabBar } from "antd-mobile"
import Home from "./home/Home"
import Chat from "./chat/Chat"
import History from "./history/History"
import Mine from "./mine/Mine"

export default class Nav extends Component {
    state = {
        selectedTab: 'home',
        tabList: [
            { title: "首页", key: "home", icon: "Homehomepagemenu", sicon: "Homehomepagemenu_1",page:<Home/> },
            { title: "聊天", key: "chat", icon: "chat2", sicon: "chat",page:<Chat/> },
            { title: "足迹", key: "history", icon: "history", sicon: "history_2",page:<History/> },
            { title: "我的", key: "mine", icon: "tab_mine_pre", sicon: "tab_mine",page:<Mine/> },
        ]
    }
    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div>
                    {pageText}
                </div>
            </div>
        );
    }
    render() {
        return (
            <div style={this.state.fullScreen = { position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#204F01"
                    tintColor="#204F01"
                    barTintColor="white"
                >
                    {
                        this.state.tabList.map(obj => {
                            return (
                                <TabBar.Item
                                    title={obj.title}
                                    key={obj.key}
                                    icon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: `url(${require("../../assets/images/"+ obj.icon +".png")}) center center /  21px 21px no-repeat`
                                    }}
                                    />
                                    }
                                    selectedIcon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: `url(${require("../../assets/images/"+ obj.sicon +".png")}) center center /  21px 21px no-repeat`
                                    }}
                                    />
                                    }
                                    selected={this.state.selectedTab === obj.key}
                                    onPress={() => {
                                        this.setState({
                                            selectedTab: obj.key,
                                        });
                                    }}
                                    data-seed="logId"
                                >
                                    {this.renderContent(obj.page)}
                                </TabBar.Item>)
                        })
                    }


                </TabBar>
            </div>
        )
    }
}
