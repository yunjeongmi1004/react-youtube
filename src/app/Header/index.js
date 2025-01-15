import React from "react"
import './style.css'
import allmenu from './asset/btn-allmenu.png'
import logo from './asset/logo.png'

const Header = (props) => {
  const {setIsNavOpen} = props
    return(
      <header className="header">
        <div className="inner">
            <button onClick={() => setIsNavOpen(isNavOpen => !isNavOpen)} className="btn-allmenu"><img src={allmenu} alt="전체메뉴" /></button>
            <h1><img src={logo} alt="youtu premium" /></h1>
        </div>
      </header>
    )
}

export default Header 