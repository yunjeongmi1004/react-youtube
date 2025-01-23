import React from "react"
import './style.css'
import allmenu from './assets/btn-allmenu.png'
import logo from './assets/logo.png'

const Header = (props) => {
    const {setIsNavOpen} = props
    
    return(
    <header className="header">
        <button onClick ={ () => setIsNavOpen(isNavOpen => !isNavOpen)} className="i-allmenu"><img src={allmenu} alt="전체메뉴" /></button>
        <h1 className="logo"><img src={logo} alt="youtu premium" /></h1>
        <div className="searchmain">
            <div className="searchbox">
                <input className="searchinput" type="text" placeholder="검색" />
                <button className="btn-search" aria-label="검색"><i className="i-search"></i></button>
            </div>
        </div>
        <button className="btn-videomake"><i className="i-plus"></i> 만들기</button>
        <button className="btn-noti"><i className="i-noti"></i></button>
        <button className="btn-myprofile"><img src={'https://i.namu.wiki/i/rl12tzH0S7tTU2h7Z4-54cojZN8gKz4EKhnyRwolzlYzvdQesg4lqHLfSweGAu2WZGQHdIq3Iyjydu_k248Ozs5OsY-FszfmwGgifb8mSndMIFapax5ctZ30r4d8v9vs7_qwwMhzEcVRblwqXiU0gQ.webp'} alt="" /></button>
    </header>
    )
}

export default Header 