import React from "react"
import useTabIndex from "./model/useTabIndex"
import s from "./style"

const Mypage = () => {

    const [currentTab, activeTabIndex] = useTabIndex()
    
    const myInfoData = {
        imgprofile:"",
        username:"mingo",
        usertinfo:"mingo",
      }    
    const myTabData = [
        { name: '재생목록', content: '재생목록 컨텐츠' },
        { name: '커뮤니티', content: '커뮤니티 컨텐츠' },
    ]

    return(
        <s.Mypage>
            <s.MyinfoWrap>
                <img src={myInfoData.imgprofile} alt=""/>
                <s.UserSection>
                    <s.UserName>{myInfoData.username}</s.UserName>
                    <s.UserTinfo>@{myInfoData.usertinfo}</s.UserTinfo>
                    <s.UserMore>
                        <s.UserMoreText>채널 자세히 알아보기채널 자세히 알아보기</s.UserMoreText>
                        <s.UserMoreBtn>더보기</s.UserMoreBtn>
                    </s.UserMore>
                    <s.UserBtns>
                        <s.BtnRdDgrey>채널 맞춤설정</s.BtnRdDgrey>
                        <s.BtnRdDgrey>동영상 관리</s.BtnRdDgrey>
                    </s.UserBtns>
                </s.UserSection>
            </s.MyinfoWrap>
       
            <s.TabList>
                {myTabData.map((elem,idx) => (
                    <s.TabListCont $currenttab={currentTab === idx} onClick={() => activeTabIndex(idx)} key={idx} >{elem.name}</s.TabListCont>
                ))}
            </s.TabList>
            <s.TabContent>
                {myTabData[currentTab].content}
            </s.TabContent>
        
        </s.Mypage>
 
    )
}

export default Mypage