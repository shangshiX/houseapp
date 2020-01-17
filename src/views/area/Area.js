import React, { Component } from 'react'
import listarr from "../../json/citylist.json"
import BSroll from "better-scroll"
import "./area.scss"
// console.log(listarr)

export default class Area extends Component {
    render() {
        return (
            <div className="area-box">
            {/* <h2>城市列表</h2> */}
                <div id="left-box">
                    <ul className="content">
                        {
                            listarr.map(obj => {
                                return (
                                    <div key={obj.title}>
                                        <div className="title" id={obj.title}>{obj.title}</div>
                                        {
                                            obj.city.map(li => {
                                                return <p key={li.name} style={{lineHeight:3,borderBottom:"1px solid #eee"}}>{li.name}</p>
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="right-box">
                    {
                        listarr.map(obj => {
                            return <div key={obj.title} onClick={this.clickbtn.bind(this,obj.title)} onTouchMove={this.movebtn.bind(this)}>{obj.title}</div>
                        })
                    }
                </div>
            </div>
        )
    }


    clickbtn(val){
        this.leftbox.scrollToElement("#"+val,600)
    }

    movebtn(e){
        // console.log(e.touches[0].clientX,e.touches[0].clientY)
        let touchesbox = document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY)
        this.leftbox.scrollToElement("#"+touchesbox.innerHTML,600)
    }

    componentDidMount() {
        this.leftbox = new BSroll("#left-box", 600)
    }
}
