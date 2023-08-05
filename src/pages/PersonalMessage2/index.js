import "./index.css"
import TopBar3 from "../../components/TopBar3";
import React from "react";


function PersonalMessage2(){
    return(
        <div>
            <TopBar3 className={'pm2-bar'}/>
            <div className={'pm2-top'}>
                <img src={require('./img/bgc.png')} alt='' style={{width: 2048}}/>
            </div>
            <div style={{position:"absolute",zIndex:999,top:335,left:640,color:"white",
                fontSize: 49,
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal"}}>
                舒佳恒
            </div>
            <div className={'pm2-side'} style={{position:"absolute",zIndex:999,top:410,left:1626}}>个人简历</div>
            <div className={'pm2-left'}>
                <img style={{width: 320}} src={require('./img/avatar.png')} alt={''}/>
                <div className={'pm2-side'}>个人简历</div>
                <p style={{fontSize:20,marginLeft:30,marginBottom:30,fontWeight:"bold",marginTop:50}}>个人信息</p>
                <div className={'pm2-message'}>
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
            <div className={'pm2-right'}>
                <div className={'pm2-right-title'}>我的队伍</div>
                <div className={'pm2-right-main-card'}>
                    <div className={'pm2-right-main-card2'}>666队</div>

                </div>
                <div className={'pm2-right-main-card3'}>
                    <p style={{display:'block',width:20}}></p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.0002 7.75V13M21.0802 8.58V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C4.00193 17.8727 3.60509 17.4745 3.32951 16.9953C3.05392 16.5161 2.9093 15.9728 2.91016 15.42V8.58C2.91016 7.46 3.51016 6.42 4.48016 5.85L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.85C20.4802 6.42 21.0802 7.45 21.0802 8.58Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 16.2V16.2999" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    新的入队申请
                </div>
            </div>
        </div>
    )
}

export default PersonalMessage2
