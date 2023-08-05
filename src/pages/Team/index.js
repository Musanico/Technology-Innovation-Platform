import "./index.css"
import TopBar2 from "../../components/TopBar2";
import Search from "antd/es/input/Search";
import {Avatar, Pagination} from "antd";
import {PlusOutlined} from "@ant-design/icons";


function Team(){
    return(
        <div>
            <TopBar2 className={'tm-bar'}/>
            <div>
                <img src={require('./img/bgc.png')} alt='' style={{width: 2038,height:380}}/>
            </div>
            <div className={'tm-search'}>
                <Search
                    placeholder=""
                    allowClear
                    enterButton="搜索"
                    size="large"
                />
            </div>
            <div className={'tm-left'}>
                <div className={'tm-left-part'}>
                    <div className={'tm-left-part-title'}>
                        开心超人战队
                    </div>
                    <div className={'tm-left-part-subtitle'}>
                        多笑笑吧！笑一笑有什么不好吗？
                    </div>
                    <div className={'tm-left-part-avatar'}>
                        <Avatar size={100} src={<img src={require('./img/1.png')} alt="avatar" />} style={{marginRight:20}}/>
                        <Avatar size={100} src={<img src={require('./img/2.png')} alt="avatar" />} style={{marginRight:20}}/>
                        <Avatar size={100} src={<img src={require('./img/3.png')} alt="avatar" />} style={{marginRight:20}}/>
                        <Avatar size={100} src={<img src={require('./img/4.png')} alt="avatar" />} style={{marginRight:20}}/>
                        <Avatar size={100} src={<img src={require('./img/5.png')} alt="avatar" />} />
                    </div>
                </div>
                <div className={'tm-left-part'}>
                    <div className={'tm-left-part-title'}>
                        至尊神龙战队
                    </div>
                    <div className={'tm-left-part-subtitle'}>
                        加——入——我们吧！！！
                    </div>
                    <div className={'tm-left-part-avatar'}>
                        <Avatar size={100} src={<img src={require('./img/21.png')} alt="avatar" />} style={{marginRight:20}}/>
                        <Avatar size={100} src={<img src={require('./img/22.png')} alt="avatar" />} style={{marginRight:20}}/>
                        <Avatar size={100} src={<img src={require('./img/23.png')} alt="avatar" />} style={{marginRight:20}}/>
                        <Avatar size={100} src={<img src={require('./img/24.png')} alt="avatar" />} style={{marginRight:20}}/>
                        <Avatar size={100} icon={<PlusOutlined/>}/>
                    </div>
                </div>
                <div className={'tm-left-part'}>
                    <div className={'tm-left-part-title'}>
                        啊对对队
                    </div>
                    <div className={'tm-left-part-subtitle'}>
                        你说的都对
                    </div>
                    <div className={'tm-left-part-avatar'}>
                        <Avatar size={100} src={<img src={require('./img/31.png')} alt="avatar" />} style={{marginRight:20}}/>
                        <Avatar size={100} icon={<PlusOutlined/>} style={{marginRight:20}}/>
                        <Avatar size={100} icon={<PlusOutlined/>} style={{marginRight:20}}/>
                        <Avatar size={100} icon={<PlusOutlined/>} style={{marginRight:20}}/>
                        <Avatar size={100} icon={<PlusOutlined/>}/>
                        </div>
                </div>
                <div className={'tm-left-part-bottom'}>
                    <Pagination defaultCurrent={6} defaultPageSize={3} pageSizeOptions={[3,6,9]} total={450} />
                </div>
            </div>
            <div className={'tm-right'}>
                <div className={'tm-right-avatar'}>
                    <Avatar size={140} src={<img src={require('./img/logo.png')} alt="avatar" />} style={{marginRight:20}}/>
                    <div className={'tm-right-title'}>开心超人战队</div>
                </div>
                <div className={'tm-right-sub'}>
                    <p className={'tm-right-sub-p1'}>队伍简介:</p>
                    <p className={'tm-right-sub-p2'}>多笑笑吧！笑一笑有什么不好吗？</p>
                    <p className={'tm-right-sub-p1'}>报名比赛:</p>
                    <p className={'tm-right-sub-p2'}>第六届中国互联网+竞赛</p>
                    <p className={'tm-right-sub-p1'}>项目成员:</p>
                    <p className={'tm-right-sub-p2'}>张三/李四/王五/赵钱/孙李</p>
                    <p className={'tm-right-sub-p1'}>指导老师:</p>
                    <p className={'tm-right-sub-p2'}>匡振中</p>
                    <p className={'tm-right-sub-p1'}>比赛经历:</p>
                    <p className={'tm-right-sub-p2'} style={{float:"left",display:"block",width:260}}>
                        <p>1.数学建模校赛校二等奖</p>
                        <p>2.校ACM竞赛一等奖</p>
                        <p>3.第五届互联网+竞赛全国二等奖</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Team
