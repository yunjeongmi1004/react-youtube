import React from "react"
import s from "./style"

const Item = (props) => {
    const {videodata} = props
    const [isHovering, setIsHovering] = React.useState(false) 

    return(
      <s.Videobox onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
        <s.Videothum>
            <s.VideoImg src={videodata.imgthumurl} alt="" />
            {isHovering ? (<s.VideoTime>{videodata.time}</s.VideoTime>) : null}
        </s.Videothum>
        <s.VideoInfo>
          <s.VideoProfile>
            <s.VideoProfileImg src={videodata.imgprofile} alt="" />
          </s.VideoProfile>
          <s.VideoText>
              <s.VideoTextType1>{videodata.id}번 타이틀 : {videodata.title}</s.VideoTextType1>
              <s.VideoTextType2>{videodata.username}</s.VideoTextType2>
              <s.VideoTextList>
                  <s.TextSpan>조회수 {videodata.views}만회</s.TextSpan>
                  <s.TextSpan2>{videodata.date}</s.TextSpan2>
              </s.VideoTextList>
          </s.VideoText>
        </s.VideoInfo>
      </s.Videobox>
    )
}

export default Item