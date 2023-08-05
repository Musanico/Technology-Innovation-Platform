import "./index.css"
import TopBar3 from "../../components/TopBar3";
import React from "react";


function PersonalMessage3(){
    return(
        <div>
            <TopBar3 className={'pm3-bar'}/>
            <div className={'pm3-top'}>
                <img src={require('./img/bgc.png')} alt='' style={{width: 2048}}/>
            </div>
            <div style={{position:"absolute",zIndex:999,top:335,left:640,color:"white",
                fontSize: 49,
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal"}}>
                舒佳恒
            </div>
            <div className={'pm3-side'} style={{position:"absolute",zIndex:999,top:410,left:1626}}>个人简历</div>
            <div className={'pm3-left'}>
                <img style={{width: 320}} src={require('./img/avatar.png')} alt={''}/>
                <div className={'pm3-side'}>个人简历</div>
                <p style={{fontSize:20,marginLeft:30,marginBottom:30,fontWeight:"bold",marginTop:50}}>个人信息</p>
                <div className={'pm3-message'}>
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
            <div className={'pm3-right'}>
                <div className={'pm3-right-title'}>我的收藏</div>
                <div className={'pm3-right-main-card'}>
                </div>
                <div className={'pm3-right-main-card3'}>
                    <p style={{display:'block',width:20}}></p>
                    <div className={'pm3-right-subtitle'}>
                        <p>第六届中国互联网+竞赛</p>
                        <p>2022.6.11~2022.6.17</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalMessage3
