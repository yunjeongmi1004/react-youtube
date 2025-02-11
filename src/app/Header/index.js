import React from "react"
import useNavopenAtom from "../../shared/model/useNavopenAtom"
import s from "./style"
import allmenu from './assets/btn-allmenu.png'
import logo from './assets/logo.png'
import profile from './assets/thum.jpg'

const Header = () => {

    const [, setIsNavOpen] =  useNavopenAtom()

    return(
    <s.Header>
        <s.BtnAllmenu onClick ={ () => setIsNavOpen(isNavOpen => !isNavOpen)}>
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
    </s.Header>
    )
}

export default Header 