import React, { Component } from 'react'
import topbar2 from './index.module.css'

import logo from './images/logo_colourful.png'
import {Avatar} from "antd";

export default class TopBar2 extends Component {
  render() {
    return (
      <div style={{width:'2031px',height:'47px',backgroundColor:'white'}}>
        <div style={{width:'297px',height:'47px',float:'left'}}></div>
        <div style={{width:'234px',height:'43px',marginTop:'2px',float:'left'}}>
          <img src={logo} alt="" width='100%'/>
        </div>
        <div style={{width:'14px',height:'47px',float:'left'}}></div>
        <div style={{width:'157px',height:'47px',float:'left',color:'black',fontSize:'14px',textAlign:'center',lineHeight:'47px',fontWeight:'bold'}}>大学生科技创新孵化平台</div>
        {/*导航栏主体*/}
        <div className={topbar2.topbar}>
          <div className={topbar2.item}><img src={require('./images/home.png')} alt="" />&nbsp;<span style={{color:'black',fontWeight:'bold'}}>首页</span></div>
          <div className={topbar2.item}><img src={require('./images/people.png')} alt="" />&nbsp;<span>学生检索</span></div>
          <div className={topbar2.item}><img src={require('./images/people.png')} alt="" />&nbsp;<span>教师检索</span></div>
          <div className={topbar2.item} style={{borderBottom:'3px solid #32a0d7'}}><img src={require('./images/trophy.png')} alt="" />&nbsp;<span>竞赛相关</span></div>
          <div className={topbar2.item}><img src={require('./images/gift.png')} alt="" />&nbsp;<span>活动相关</span></div>
          <div className={topbar2.item}><img src={require('./images/box.png')} alt="" />&nbsp;<span>学院立项</span></div>
          <div className={topbar2.item}><img src={require('./images/horn.png')} alt="" />&nbsp;<span>讲座|竞赛通知</span></div>
          <div className={topbar2.item}><img src={require('./images/team.png')} alt="" />&nbsp;<span>组队频道</span></div>
          <div className={topbar2.item}><img src={require('./images/shopping.png')} alt="" />&nbsp;<span>积分商城</span></div>
          <div className={topbar2.item}><img src={require('./images/more.png')} alt="" /></div>
            <div className={topbar2.item} style={{marginTop: -15,marginLeft: 30}}>
                <Avatar size={45} src={<img src={require('./images/favicon.jpg')} alt="avatar" />} />
            </div>
            <div>你好，佳恒</div>
        </div>
        <div style={{width:'39px',height:'47px',float:'left'}}></div>
      </div>
    )
  }
}
