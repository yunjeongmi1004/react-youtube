import React from "react"
import './style.css'

const Video = (props) => {
  const {videodata} = props
  const [isHovering, setIsHovering] = React.useState(false) 

    return(
      <div className="video-box" onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
        <div className="video-thum">
            <img src={videodata.imgthumurl} alt="" />
            {isHovering ? (<span className="video-time">{videodata.time}</span>) : null}
        </div>
        <div className="video-info">
          <div className="video-profile"><img src={videodata.imgprofile} alt="" /></div>
          <div className="video-text">
              <p className="text-type1">{videodata.title}</p>
              <p className="text-type2">{videodata.username}</p>
              <div className="text-list">
                  <span>조회수 {videodata.views}만회</span>
                  <span>{videodata.date}</span>
              </div>
          </div>
        </div>
      </div>
    )
}


export default Video