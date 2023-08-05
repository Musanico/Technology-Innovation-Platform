import "./index.css"
import TopBar3 from "../../components/TopBar3";
import React from "react";
import {Calendar, Card, theme} from "antd";

const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};

function PersonalMessage4(){
    const { token } = theme.useToken();
    const wrapperStyle = {
        float:'left',
        width: 500,
        height: 500,
        paddingTop: 80,
        paddingLeft: 50,
        paddingRight: 50,
        padding: 'auto',
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };
    return(
        <div>
            <TopBar3 className={'pm4-bar'}/>
            <div className={'pm4-top'}>
                <img src={require('./img/bgc.png')} alt='' style={{width: 2048}}/>
            </div>
            <div style={{position:"absolute",zIndex:999,top:335,left:640,color:"white",
                fontSize: 49,
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal"}}>
                舒佳恒
            </div>
            <div className={'pm4-side'} style={{position:"absolute",zIndex:999,top:410,left:1626}}>个人简历</div>
            <div className={'pm4-left'}>
                <img style={{width: 320}} src={require('./img/avatar.png')} alt={''}/>
                <div className={'pm4-side'}>个人简历</div>
                <p style={{fontSize:20,marginLeft:30,marginBottom:30,fontWeight:"bold",marginTop:50}}>个人信息</p>
                <div className={'pm4-message'}>
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
            <div className={'pm4-right'}>
                <div style={wrapperStyle}>
                    <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                </div>
                <div style={{
                    float:'left',
                    display:'inline-block'
                }}>
                    <Card headerFontSize={'20'} style={{

                        width: 500,
                        height: 500
                    }}>
                        <Card type="inner" title="8:30 AM" style={{
                        }}>
                            Take Ellie for a walk
                        </Card>
                        <Card
                            style={{
                                marginTop: 6,
                            }}
                            type="inner"
                            title="10 AM"
                        >
                            Dial into morning check-in
                        </Card>
                        <Card
                            style={{
                                marginTop: 6,
                            }}
                            type="inner"
                            title="10 AM"
                        >
                            Dial into morning check-in
                        </Card>
                        <Card
                            style={{
                                marginTop: 6,
                            }}
                            type="inner"
                            title="10 AM"
                        >
                            Dial into morning check-in
                        </Card>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default PersonalMessage4
