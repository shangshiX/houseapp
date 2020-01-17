import Axios from "axios"
import qs from "qs"
import { id } from "postcss-selector-parser";


// export let ip = "http://192.168.43.110:80"
export let ip = "http://127.0.0.1:80"
// export let ip = "http://192.168.43.110:80"
// export let ip = "http://192.168.1.7:80"
const ax = Axios.create({
    // baseURL:"http://localhost:80/",
    baseURL:ip,
    timeout:10000
})


// 登录发送Ajax
export function login(acc,pwd){
    return ax.post("/login.php",qs.stringify({
        acc,
        pwd
    }))
}


// 注册发送Ajax
export function reg(acc,pwd){
    return ax.post("/reg.php",qs.stringify({
        acc,
        pwd
    }))
}

// 获取猜你喜欢列表
export function enjoy(){
    return ax.get("/gethouselist.php")
}