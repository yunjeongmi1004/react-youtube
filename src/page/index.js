import React from "react"
import s from "./style"
import Video from "./Video"
import Mypage from "./Mypage"
import Shorts from "./Shorts"
import SignUp from "./SignUp"
import Login from "./Login"
import {Routes, Route, Navigate , useLocation} from "react-router-dom"
import icoHome from './assets/home.svg'
import icoHomeAct from './assets/home-fill.svg'
import icoShorts from './assets/library.svg'
import icoShortsAct from './assets/library-fill.svg'
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
import useNavopenAtom from "../shared/model/useNavopenAtom"
import AccountDetail from "./Login/AccountDetail"
const Page = () => {

    const [isNavOpen] = useNavopenAtom()
    const location = useLocation()
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
        <s.Nav $isnavopen={isNavOpen}>
            {navdef.map((elem) => 
                <s.NavStyle to={elem.navigate} key={elem.title} $isnavopen={isNavOpen}>
                    <img src={`${location.pathname === `/${elem.classname}` ? elem.imgactive : elem.imgdef}`} alt="" />
                    <s.NavTitle $isnavopen={isNavOpen}>{elem.title}</s.NavTitle>  
                </s.NavStyle>
            )} 
            {isNavOpen && (
                <>
                {navactive.map((elem) =><s.BtnNavMenu key={elem.title}>{elem.title}</s.BtnNavMenu>)}
                </>
            )}
        </s.Nav>
        <s.Main $isnavopen={isNavOpen}>
            <Routes>
                <Route path="/" element={<Navigate to="/home?page=1" replace />}/>
                <Route path="/home" element={<Video />} />  
                <Route path="/shorts" element={<Shorts />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/account-detail" element={<AccountDetail />} />
            </Routes>
        </s.Main>
      
        </>

    )
}

export default Page