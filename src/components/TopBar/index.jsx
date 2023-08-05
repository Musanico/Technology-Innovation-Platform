import React, { Component } from 'react'
import topbar from './index.module.css'

import plainlogo from './images/plainlogo.png'
import bg from './images/bg.jpg'

export default class TopBar extends Component {
  render() {
    return (
      <div style={{width:'1520px',height:'750px',backgroundImage:`url(${bg})`}}>
        <div style={{width:'97px',height:'47px',float:'left'}}></div>
        <div style={{width:'234px',height:'43px',marginTop:'2px',float:'left'}}>
          <img src={plainlogo} alt="" width='100%'/>
        </div>
        <div style={{width:'14px',height:'47px',float:'left'}}></div>
        <div style={{width:'157px',height:'47px',float:'left',color:'white',fontSize:'14px',textAlign:'center',lineHeight:'47px'}}>大学生科技创新孵化平台</div>
        {/*导航栏主体*/}
        <div className={topbar.topbar}>
          <div className={topbar.item} style={{borderBottom:'3px solid #32a0d7'}}><img src={require('./images/home.png')} alt="" />&nbsp;<span style={{color:'white',fontWeight:'bold'}}>首页</span></div>
          <div className={topbar.item}><img src={require('./images/people.png')} alt="" />&nbsp;<span>学生检索</span></div>
          <div className={topbar.item}><img src={require('./images/people.png')} alt="" />&nbsp;<span>教师检索</span></div>
          <div className={topbar.item}><img src={require('./images/trophy.png')} alt="" />&nbsp;<span>竞赛相关</span></div>
          <div className={topbar.item}><img src={require('./images/gift.png')} alt="" />&nbsp;<span>活动相关</span></div>
          <div className={topbar.item}><img src={require('./images/box.png')} alt="" />&nbsp;<span>学院立项</span></div>
          <div className={topbar.item}><img src={require('./images/horn.png')} alt="" />&nbsp;<span>讲座|竞赛通知</span></div>
          <div className={topbar.item}><img src={require('./images/team.png')} alt="" />&nbsp;<span>组队频道</span></div>
          <div className={topbar.item}><img src={require('./images/shopping.png')} alt="" />&nbsp;<span>积分商城</span></div>
          <div className={topbar.item}><img src={require('./images/more.png')} alt="" /></div>
        </div>
        <div style={{width:'39px',height:'47px',float:'left'}}></div>
        <div className={topbar.login}>登录/注册</div>
        {/*彩色按钮*/}
        <div className={topbar.big_button}>
          <div className={topbar.text}>开启科技创新之旅<img src={require('./images/arrow.png')} alt="" /></div>
        </div>
      </div>
    )
  }
}
