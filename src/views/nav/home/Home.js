import React, { Component } from 'react'
import { WingBlank, Carousel, Grid, WhiteSpace } from "antd-mobile"
import "./Home.scss"
import { enjoy, ip } from "../../../api/apis"

const data = [
    { icon: require("../../../assets/images/newhouse.png"), text: "新房" },
    { icon: require("../../../assets/images/oldhouse.png"), text: "二手房" },
    { icon: require("../../../assets/images/renting.png"), text: "租房" },
    { icon: require("../../../assets/images/officebuild.png"), text: "商铺写字楼" },
    { icon: require("../../../assets/images/sellhouse.png"), text: "卖房" },
    { icon: require("../../../assets/images/overseashouse.png"), text: "海外房产" },
    { icon: require("../../../assets/images/plot.png"), text: "小区房价" },
    { icon: require("../../../assets/images/qaa.png"), text: "问答" }
]
const data2 = [
    { icon: require("../../../assets/images/qian.png"), text: "我要贷款" },
    { icon: require("../../../assets/images/fangjiajisuanqi.png"), text: "房贷计算" },
    { icon: require("../../../assets/images/zhishi.png"), text: "知识" },
    { icon: require("../../../assets/images/richscan_icon.png"), text: "扫一扫" },
]

export default class Home extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        enjoylist: [],
        mycity: "定位中"
    }
    componentDidMount() {
        // console.log(1111)
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579001951547&di=ace666ad2a7d1e855e6cc561498e1d7c&imgtype=0&src=http%3A%2F%2Fimg8.zol.com.cn%2Fbbs%2Fupload%2F23783%2F23782536.JPG', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2562408540,1518671469&fm=26&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579001951546&di=f6a8a9ac27956b43ebc71e45688e8c12&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FZFlyGwXINLWJsvJp7vA9c%3DcaUUjpCAhkERD5fR6zfHpHM1537694214711compressflag.jpg'],
            });
        }, 100);

        enjoy().then(val => {
            // console.log(val.data)
            this.setState({
                enjoylist: val.data
            })
        })

        // let vm = this
        // //实例化城市查询类
        // var citysearch = new window.AMap.CitySearch();
        // //自动获取用户IP，返回当前城市
        // citysearch.getLocalCity(function (status, result) {
        //     if (status === 'complete' && result.info === 'OK') {
        //         if (result && result.city && result.bounds) {
        //             var cityinfo = result.city;
        //             var citybounds = result.bounds;
        //             vm.setState({
        //                 mycity: cityinfo
        //             })
        //         }
        //     } else {
        //         vm.setState({
        //             mycity:result.info
        //         })
        //     }
        // });
    }
    render() {
        let { enjoylist, mycity } = this.state
        return (
            <div>
                <div className="main-container">
                    {/* 顶栏 */}
                    <div className="main-topbox">
                        <label onClick={this.areaBtn.bind(this)}>{mycity} ▼</label>
                        <div className="searchbox">
                            <img src={require("../../../assets/images/search.png")} />
                            <label>请输入商家名、详细地址</label>
                        </div>
                        <img src={require("../../../assets/images/map.png")} onClick={this.mapBtn.bind(this)}/>
                    </div>
                    {/* 轮播部分 */}
                    <Carousel
                        autoplay
                        infinite
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="#"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`${val}`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                    {/* 导航栏 */}
                    <WingBlank>
                        <Grid data={data} hasLine={false} />
                        <WhiteSpace size="sm" />
                        {/* 房屋百科卡片 */}
                        <div className="card">
                            <div className="cardtopbox">
                                <h3>房产全百科</h3>
                                <p>专业的买房攻略</p>
                            </div>
                            <Grid data={data2} hasLine={false} />
                        </div>
                        {/* 猜你喜欢模块 */}
                        <div className="enjoy">
                            <h3>猜你喜欢</h3>
                            {
                                enjoylist.map(obj => {
                                    return (
                                        <div className="enbox" key={obj.id}>
                                            <div className="leftbox">
                                                <img src={ip + obj.imgs} />
                                            </div>
                                            <div className="rightbox">
                                                <div>
                                                    <h2>{obj.name}</h2>
                                                    <p style={{ color: '#aaa' }}>
                                                        <span>{obj.area}</span>
                                                        <span>{obj.range}</span>
                                                    </p>
                                                    <p style={{ color: '#aaa' }}>
                                                        <span>{obj.type}</span>
                                                        <span>{obj.point}平</span>
                                                    </p>
                                                </div>
                                                <p style={{ color: '#f00', fontSize: 18, fontWeight: 600 }}>{obj.price}/平</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </WingBlank>
                </div>
            </div>
        )
    }

    areaBtn() {
        window.location.href = "#/area"
    }

    mapBtn() {
        window.location.href = "#/map"
    }


    componentWillUnmount(){
        this.setState = (value,callback)=>{
            return
        }
    }
}
