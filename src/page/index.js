import React from "react"
import Container from "./Container"
import './style.css'
import icoHome from './assets/home.svg'
import icoHomeAct from './assets/home-fill.svg'
import icoShorts from './assets/library.svg'
import icoShortsAct from './assets/library-fill.svg'
import icoSubc from './assets/yours.svg'
import icoSubcAct from './assets/yours-fill.svg'
import icoMusic from './assets/premium.svg'
import icoMusicAct from './assets/premium-fill.svg'
import icoMypage from './assets/settings.svg'
import icoMypageAct from './assets/settings-fill.svg'
import icoHistory from './assets/history.svg'
import icoHistoryAct from './assets/history-fill.svg'
import icoLive from './assets/live.svg'
import icoLiveAct from './assets/live-fill.svg'
import icoVideo from './assets/liked.svg'
import icoVideoAct from './assets/liked-fill.svg'
import icoLater from './assets/sports.svg'
import icoLaterAct from './assets/sports-fill.svg'
import useNavIndex from "./model/useNavIndex"

const Page = (props) => {
    const [navIndex, setNavIndex, activeNavIndex] = useNavIndex()
    const {isNavOpen} = props
    
    const navdef = [
        {
            title : "홈",
            classname: "home",
            imgdef : icoHome,
            imgactive : icoHomeAct,
            navigate : "/home?page=1",
        },
        {
            title : "Shorts",
            classname:"shorts",
            imgdef :icoShorts,
            imgactive : icoShortsAct,
            navigate : "/shorts",
        },
        {
            title : "구독",
            classname:"subscription",
            imgdef : icoSubc,
            imgactive : icoSubcAct,
            navigate : null,
        },
        {
            title : "Youtube Music",
            classname: "music",
            imgdef : icoMusic,
            imgactive : icoMusicAct,
            navigate : null,
        },
        {
            title : "내 페이지",
            classname: "mypage",
            imgdef : icoMypage,
            imgactive : icoMypageAct,
            navigate : '/mypage',
        }
    ]
    const navactive = [
        {
            title : "시청 기록",
            classname : "history",
            imgdef : icoHistory,
            imgactive : icoHistoryAct
        },
        {
            title : "재생목록",
            classname : "playlist",
            imgdef : icoLive,
            imgactive : icoLiveAct
        },
        {
            title : "내 동영상",
            classname : "myvideo",
            imgdef : icoVideo,
            imgactive : icoVideoAct
        },
        {
            title : "나중에 볼 동영상",
            classname : "latervideo",
            imgdef : icoLater,
            imgactive : icoLaterAct
        }
    ]

    return (
        <>
        <nav className={isNavOpen ? "nav active" : "nav"}>
            {navdef.map((elem, idx) => 
                <button className={navIndex === idx ? `btn-nav-menu ${elem.classname} active` : `btn-nav-menu ${elem.classname}`} 
                        key={idx}  
                        onClick={() => activeNavIndex(idx, elem.navigate)}>
                    {navIndex === idx ? <img src={elem.imgactive} alt="" /> : <img src={elem.imgdef} alt="" />}
                    <span>{elem.title}</span>  
                </button>
            )}
            {isNavOpen && (
                <>
                {navactive.map((elem, idx) =>
                    <button className={`btn-nav-menu ${elem.classname}`} key={idx}>
                         {navIndex === idx ? <img src={elem.imgactive} alt="" /> : <img src={elem.imgdef} alt="" />}
                        <span>{elem.title}</span>
                    </button>
                )}
                </>
            )}
        </nav>
        <main className={isNavOpen ? "container active" : "container"}>
            <Container setNavInde={setNavIndex}></Container>
        </main>
        </>
    )
}

export default Page