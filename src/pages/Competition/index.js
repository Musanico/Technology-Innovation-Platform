import "./index.css"
import TopBar2 from "../../components/TopBar2";
import {Card} from "antd";
import Search from "antd/es/input/Search";


function Competition(){
    const { Meta } = Card;
    return(
        <div>
            <TopBar2 className={'comp-bar'}/>
            <div className={'comp-top'}>
                <img src={require('./img/bgc.png')} alt='' style={{width: 2048}}/>
            </div>
            <div className={'comp-search'}>
                <Search
                    placeholder=""
                    allowClear
                    enterButton="搜索"
                    size="large"
                />
            </div>
            <div className='comp-card'>
                <Card
                    hoverable
                    style={{ width: 350 }}
                    cover={<img alt="example" src={require('./img/p4.png')} />}
                >
                    <Meta title="第六届中国互联网+竞赛" description="2022.6.11-2022.6.17" />
                </Card>
            </div>
            <div className='comp-card'>
                <Card
                    hoverable
                    style={{ width: 350 }}
                    cover={<img alt="example" src={require('./img/p2.png')} />}
                >
                    <Meta title="第六届中国互联网+竞赛" description="2022.6.11-2022.6.17" />
                </Card>
            </div>
            <div className='comp-card'>
                <Card
                    hoverable
                    style={{ width: 350 }}
                    cover={<img alt="example" src={require('./img/p3.png')} />}
                >
                    <Meta title="第六届中国互联网+竞赛" description="2022.6.11-2022.6.17" />
                </Card>
            </div>
            <div className='comp-card'>
                <Card
                    hoverable
                    style={{ width: 350 }}
                    cover={<img alt="example" src={require('./img/p1.png')} />}
                >
                    <Meta title="第六届中国互联网+竞赛" description="2022.6.11-2022.6.17" />
                </Card>
            </div>
            <div className='comp-card'>
                <Card
                    hoverable
                    style={{ width: 350}}
                    cover={<img alt="example" src={require('./img/p5.png')} />}
                >
                    <Meta title="第六届中国互联网+竞赛" description="2022.6.11-2022.6.17" />
                </Card>
            </div>
        </div>
    )
}

export default Competition
