import React, { Component } from 'react'
import "./map.scss"

export default class Map extends Component {
    render() {
        return (
            <div>
                <div id="container"></div>
            </div>
        )
    }


    componentDidMount() {
        let vm = this
        var map = new window.AMap.Map("container", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
        //获取用户所在城市信息
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    //地图显示当前城市
                    map.setBounds(citybounds);
                }
            } else {
            }
        });
    }
}
