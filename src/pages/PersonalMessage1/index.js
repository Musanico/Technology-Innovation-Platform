import "./index.css"
import TopBar3 from "../../components/TopBar3";
import React from "react";
import {DownOutlined} from "@ant-design/icons";
import {Space} from "antd";


function PersonalMessage1(){
    return(
        <div>
            <TopBar3 className={'pm1-bar'}/>
            <div className={'pm1-top'}>
                <img src={require('./img/bgc.png')} alt='' style={{width: 2048}}/>
            </div>
            <div style={{position:"absolute",zIndex:999,top:335,left:640,color:"white",
                fontSize: 49,
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal"}}>
                舒佳恒
            </div>
            <div className={'pm1-top-sub'}>
                <div>我的申请</div>
                <div>我的队伍</div>
                <div>我的日程</div>
                <div>我的收藏</div>
            </div>
            <div className={'pm1-side'} style={{position:"absolute",zIndex:999,top:410,left:1626}}>个人简历</div>
            <div className={'pm1-left'}>
                <img style={{width: 320}} src={require('./img/avatar.png')} alt={''}/>
                <div className={'pm1-side'}>个人简历</div>
                <p style={{fontSize:20,marginLeft:30,marginBottom:30,fontWeight:"bold",marginTop:50}}>个人信息</p>
                <div className={'pm1-message'}>
                    <p style={{color: "gray"}}>性别</p>
                    <p>男</p>
                    <p style={{color: "gray"}}>名族</p>
                    <p>汉</p>
                    <p style={{color: "gray"}}>年龄</p>
                    <p>19</p>
                    <p style={{color: "gray"}}>年级</p>
                    <p>2022</p>
                    <p style={{color: "gray"}}>政治面貌</p>
                    <p>共青团员</p>
                </div>
            </div>
            <div className={'pm1-right'}>
                <div className={'pm1-right-top'}>
                        <Space>
                            <div className={'pm1-right-top-title'}>
                                组队申请
                            </div>
                            <DownOutlined />
                        </Space>
                </div>
                <div className={'pm1-right-main'}>
                    <div className={'pm1-right-main-card'}>
                        <div className={'pm1-right-main-title'}>开心超人战队</div>
                        <div className={'pm1-right-main-bnt'}>被拒</div>
                        <div className={'pm1-right-main-subtitle'}>Re：我们很高兴看到你想要加入我们战队，但队伍人数已满，实在抱歉</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalMessage1
