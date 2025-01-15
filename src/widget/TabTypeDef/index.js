import React from "react"
import './style.css'

const TabTypeDef = (props) => {
    const {tabdata} = props
    const [currentTab, setCurrentTab] = React.useState(0)
    return(
    <div>
        <ul className="tab-list">
          {tabdata.map((elem,idx) => (
              <li className={currentTab === idx ? "active" : "" } onClick={() => setCurrentTab(idx)} key={idx} >{elem.name}</li>
          ))}
        </ul>
        {currentTab === 0 && <div>{tabdata[currentTab].content}</div>}
        {currentTab === 1 && <div>{tabdata[currentTab].content}</div>}
    </div>
    )
}


export default TabTypeDef