import "./index.css"
import TopBar3 from "../../components/TopBar3";
import React from "react";


function PersonalMessage(){
    return(
        <div>
            <TopBar3 className={'pm-bar'}/>
            <div className={'pm-top'}>
                <img src={require('./img/bgc.png')} alt='' style={{width: 2048}}/>
            </div>
            <div style={{position:"absolute",zIndex:999,top:335,left:640,color:"white",
                fontSize: 49,
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal"}}>
                舒佳恒
            </div>
            <div className={'pm-side'} style={{position:"absolute",zIndex:999,top:410,left:1626}}>个人简历</div>
            <div className={'pm-left'}>
                <img style={{width: 320}} src={require('./img/avatar.png')} alt={''}/>
                <div className={'pm-side'}>个人简历</div>
                <p style={{fontSize:20,marginLeft:30,marginBottom:30,fontWeight:"bold",marginTop:50}}>个人信息</p>
                <div className={'pm-message'}>
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
                <div className={'pm-right'}>
                    <div className={'pm-right-part'}>
                        <div className={'pm-right-part-mine1'}>我的勋章</div>
                        <img src={require('./img/logo.png')} alt={''} style={{marginLeft:50}}/>
                    </div>
                    <div className={'pm-right-part'}>
                        <div className={'pm-right-part-mine1'}>个人荣誉</div>
                        <div className={'pm-right-part-mine2'}>
                            <p>全国大学生数学竞赛国家一等奖</p>
                            <p>华为算法大赛一等奖</p>
                            <p>全国大学生程序设计竞赛国家一等奖</p>
                            <p>全国大学生程序设计竞赛国家一等奖</p>
                        </div>
                        <div className={'pm-right-part-mine2'}>
                            <p>全国大学生数学竞赛国家一等奖</p>
                            <p>华为算法大赛一等奖</p>
                            <p>全国大学生程序设计竞赛国家一等奖</p>
                            <p>全国大学生程序设计竞赛国家一等奖</p>
                        </div>
                    </div>
                    <div className={'pm-right-part'}>
                        <div className={'pm-right-part-mine1'}>项目经历</div>
                        <div className={'pm-right-part-mine2'}>
                            <p>全国大学生数学竞赛国家一等奖</p>
                            <p>华为算法大赛一等奖</p>
                            <p>全国大学生程序设计竞赛国家一等奖</p>
                            <p>全国大学生程序设计竞赛国家一等奖</p>
                        </div>
                        <div className={'pm-right-part-mine2'}>
                            <p>全国大学生数学竞赛国家一等奖</p>
                            <p>华为算法大赛一等奖</p>
                            <p>全国大学生程序设计竞赛国家一等奖</p>
                            <p>全国大学生程序设计竞赛国家一等奖</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalMessage
