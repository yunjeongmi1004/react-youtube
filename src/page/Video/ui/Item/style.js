import styled from "styled-components"


const style = {
  "Videobox" : styled.div`
        width:calc(25% - 15px);
        color:var(--text-color);
        cursor:pointer;

        .active &{
            width:calc(33% - 13px);
        }

        @media all and (max-width:1023px){
            width:calc(50% - 10px);
            .active &{
                 width:calc(50% - 10px);
            }
        }

        @media all and (max-width:768px){
             width:calc(100% - 20px);
            .active &{
                 width:calc(100% - 20px);
            }
        }
  `,
   "Videothum" : styled.div`
        position:relative;
        border-radius:12px;
        overflow: hidden;

        & img {
            width:100%;
            height:100%;
            aspect-ratio: 16 / 9;
            object-fit:cover;
        }
   `,
   "VideoTime" : styled.span`
       z-index:1;
        position:absolute;
        bottom:10px;
        right:10px;
        background:rgba(0,0,0,0.4);
        color:#fff;
        padding:4px;
        border-radius:4px;
        font-size:12px;
        text-align:center;
    `,
    "VideoImg" : styled.img`
    
    `,
    "VideoInfo" : styled.div`
        display:flex;
        gap:10px;
        margin:10px 0 20px;
    `,
    "VideoProfile" : styled.div`
        width:36px;
        height:36px;
        min-width:36px;
        border-radius:100%;
        overflow:hidden;
    `,
    "VideoText" : styled.div`
        text-align:left;
    `,
    "TextSpan" : styled.span`
        text-align:left;
    `,
    "TextSpan2" : styled.span`
        text-align:left;
    `,
    "VideoTextType1" : styled.div`
        display:-webkit-box;
        overflow:hidden;
        text-overflow:ellipsis;
        -webkit-box-orient: vertical;
    `,
    "VideoTextType2" : styled.div`
        font-size:12px;
        opacity:0.7;
    `,
    "VideoTextList" : styled.div`
        font-size:12px;
        opacity:0.7;
    `,
    "VideoProfileImg" : styled.img`
        width:100%;
        height:100%;
        object-fit: cover;
    `,
}

export default style