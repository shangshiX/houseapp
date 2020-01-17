// 引入redux
import { createStore } from 'redux'


// 使用redux创建仓库
let store = createStore(function () {
    return 1
})


console.log(store.getState())





export default store



