import React from "react"
import Video from "./Video"
import Mypage from "./Mypage"
import Blank from "./Blank"
import './style.css'
import Thum from './Video/asset/thum.png'
import ThumProfile from './Video/asset/thum2.jpg'

const Page = (props) => {
    const {isNavOpen} = props
    const [navIndex, setNavIndex] = React.useState(0)
    const navdef = ["홈", "Shorts", "구독", "Youtube Music", "내 페이지"]
    const navactive = ["시청 기록", "재생목록", "내 동영상", "내 영화", "나중에 볼 동영상"]
    let videoitems = [
        {
        id:0,
        title:"1𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
        username:"때껄룩",
        views:"170",
        date:"4개월 전",
        imgthumurl:Thum,
        imgprofile:ThumProfile,
        time:"1:50:37"
        },
        {
        id:1,
        title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
        username:"때껄룩",
        views:"170",
        date:"4개월 전",
        imgthumurl:Thum,
        imgprofile:ThumProfile,
        time:"50:37"
        },
        {
        id:2,
        title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
        username:"때껄룩",
        views:"170",
        date:"4개월 전",
        imgthumurl:Thum,
        imgprofile:ThumProfile,
        time:"1:50:37"
        },
        {
        id:3,
        title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
        username:"때껄룩",
        views:"170",
        date:"4개월 전",
        imgthumurl:Thum,
        imgprofile:ThumProfile,
        time:"1:50:37"
        },
        {
        id:4,
        title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
        username:"때껄룩",
        views:"170",
        date:"4개월 전",
        imgthumurl:Thum,
        imgprofile:ThumProfile,
        time:"1:50:37"
        },
        {
        id:5,
        title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
        username:"때껄룩",
        views:"170",
        date:"4개월 전",
        imgthumurl:Thum,
        imgprofile:ThumProfile,
        time:"1:50:37"
        },
        {
        id:6,
        title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
        username:"때껄룩",
        views:"170",
        date:"4개월 전",
        imgthumurl:Thum,
        imgprofile:ThumProfile,
        time:"1:50:37"
        },
        {
        id:7,
        title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
        username:"때껄룩",
        views:"170",
        date:"4개월 전",
        imgthumurl:Thum,
        imgprofile:ThumProfile,
        time:"1:50:37"
        },
        {
        id:8,
        title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
        username:"때껄룩",
        views:"170",
        date:"4개월 전",
        imgthumurl:Thum,
        imgprofile:ThumProfile,
        time:"1:50:37"
        },
        {
        id:9,
        title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
        username:"때껄룩",
        views:"170",
        date:"4개월 전",
        imgthumurl:Thum,
        imgprofile:ThumProfile,
        time:"1:50:37"
        },
        {
        id:10,
        title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
        username:"때껄룩",
        views:"170",
        date:"4개월 전",
        imgthumurl:Thum,
        imgprofile:ThumProfile,
        time:"1:50:37"
        },
        {
        id:11,
        title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
        username:"때껄룩",
        views:"170",
        date:"4개월 전",
        imgthumurl:Thum,
        imgprofile:ThumProfile,
        time:"1:50:37"
        },
    ]
    
    return (
        <>
        <nav className={isNavOpen ? "nav active" : "nav"}>
            {navdef.map((elem, idx) => 
                <button className={navIndex === idx ? "btn-nav-menu active" : "btn-nav-menu"}  key={idx} onClick={() => setNavIndex(idx)}>
                    <span>{elem}</span>  
                </button>
            )}
            {isNavOpen ? (
                <>{navactive.map((elem, idx) =><button className="btn-nav-menu" key={idx}><span>{elem}</span></button>)}</>
            ):(null)}
        </nav>
        <main className={isNavOpen ? "container active" : "container"}>
            {navIndex === 0 && videoitems.map((elem, idx) => <Video key={idx} videodata={elem}/>)}
            {navIndex === 1 && <Blank/>}
            {navIndex === 2 && <Blank/>}
            {navIndex === 3 && <Blank/>}
            {navIndex === 4 && <Mypage/>}
        </main>
        </>
    )
}

export default Page