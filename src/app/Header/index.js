import React from "react"
import {useNavigate } from "react-router-dom"
import useNavopenAtom from "../../shared/model/useNavopenAtom"
import s from "./style"
import allmenu from './assets/btn-allmenu.png'
import logo from './assets/logo.png'
import profile from './assets/thum.jpg'

const Header = () => {

    const [, toggleIsNavOpen] =  useNavopenAtom()
    const navigate = useNavigate()

    return(
    <s.Header>
        <s.BtnAllmenu onClick ={toggleIsNavOpen}>
            <img src={allmenu} alt="전체메뉴" />
        </s.BtnAllmenu>
        <s.H1><img src={logo} alt="youtu premium" /></s.H1>
        <s.SearchMain>
            <s.SearchBox>
                <s.SearchInput type="text" placeholder="검색" />
                <s.BtnSearch aria-label="검색"></s.BtnSearch>
            </s.SearchBox>
        </s.SearchMain>
        <s.BtnVideomake>만들기</s.BtnVideomake>
        <s.BtnNoti aria-label="알림"></s.BtnNoti>
        <s.BtnMyprofile>
            <img src={profile} alt="" />
        </s.BtnMyprofile>
        <button onClick={() => navigate("/signup")}>회원가입</button>
        <button onClick={() => navigate("/login")}>로그인</button>
    </s.Header>
    )
}

export default Header 