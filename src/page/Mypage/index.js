import React from "react"
import useTabIndex from "./model/useTabIndex"
import './style.css'

const Mypage = () => {

    const [currentTab, activeTabIndex] = useTabIndex()
    
    const myInfoData = {
        imgprofile:"https://i.namu.wiki/i/rl12tzH0S7tTU2h7Z4-54cojZN8gKz4EKhnyRwolzlYzvdQesg4lqHLfSweGAu2WZGQHdIq3Iyjydu_k248Ozs5OsY-FszfmwGgifb8mSndMIFapax5ctZ30r4d8v9vs7_qwwMhzEcVRblwqXiU0gQ.webp",
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
       
            <ul className="tab-list">
                {myTabData.map((elem,idx) => (
                    <li className={currentTab === idx ? "active" : "" } onClick={() => activeTabIndex(idx)} key={idx} >{elem.name}</li>
                ))}
            </ul>
            <div className="tab-content">
                {myTabData[currentTab].content}
            </div>
        
        </div>
 
    )
}

export default Mypage