import React from "react"
import TabTypeDef from "../../widget/TabTypeDef"
import ThumProfile from "./asset/thum2.jpg"
import './style.css'

const Mypage = () => {
    const myInfoData = {
        imgprofile:ThumProfile,
        username:"mingo",
        usertinfo:"mingo",
      }    
    const myTabData = [
        { name: '재생목록', content: '재생목록 컨텐츠' },
        { name: '커뮤니티', content: '커뮤니티 컨텐츠' },
      ]
    return(
        <div className="mypage">
        <div className="my-infowrap">
            <img src={myInfoData.imgprofile} alt=""/>
            <div className="user-section">
                <strong className="user-name">{myInfoData.username}</strong>
                <span className="user-tinfo">@{myInfoData.usertinfo}</span>
                <div className="user-more">
                    <span>채널 자세히 알아보기채널 자세히 알아보기</span>
                    <button>더보기</button>
                </div>
                <div>
                    <button className="btn-rd-dgrey">채널 맞춤설정</button>
                    <button className="btn-rd-dgrey">동영상 관리</button>
                </div>
            </div>
        </div>
        <TabTypeDef tabdata={myTabData} />
    </div>
 
    )
}

export default Mypage