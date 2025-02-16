
import styled from "styled-components"

const style = {

    "Mypage" : styled.div`
     width:100%;
    `,
    "MyinfoWrap" : styled.div`
        display:flex;
        width:100%;
        & img{
            width:140px;
            height:140px;
            white-space: nowrap;
            border-radius:100%;
            background:${props  => props.theme.backgroundrgb}
        }
    `,
    "UserSection" : styled.div`
        display:flex;
        flex-direction: column;
        margin-left:16px;
        color:${props  => props.theme.textcolor}
        gap:10px;
    `,
    "UserName" : styled.strong`
        font-size:36px;
        font-weight:bold;
    `,
    "UserTinfo" : styled.span``,
    "UserMore" : styled.div`
        display:flex;
        color:#666;
        font-size:12px;
    `,
    "UserMoreText" : styled.span`
        display:block;
        width:120px;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    `,
    "UserMoreBtn" : styled.button``,
    "UserBtns" : styled.div``,
    "UserBtnsbtn" : styled.button`
        color:${props  => props.theme.textcolor}
        font-size:12px;
        white-space: nowrap;
    `,
    "BtnRdDgrey" : styled.button`
        border-radius:20px;
        width:108px;
        height:36px;
        line-height:36px;
        background:${props  => props.theme.backgroundcolorgrey}
        font-size:14px;
        color:${props  => props.theme.textcolorblack}
        & + button{
            margin-left:10px
        }
    `,
    "TabList" : styled.ul`
        display:flex;
        width:100%;
        gap:28px;
        border-bottom:1px solid ${props  => props.theme.borderlinebottom};

    `,
    "TabListCont" : styled.li`
        position:relative;
        padding:10px;
        color:${props  => props.theme.textcolor};
        font-size:16px;
        opacity:${(props) => props.$currenttab  ? 1 : 0.7};
        cursor: pointer;
        transition: all .2s;
        &:after{
            display: ${(props) => props.$currenttab  ? 'block' : 'none'};
            width: ${(props) => props.$currenttab  ? '100%' : '0'};
            content:'';
            position:absolute;
            bottom:0;
            left:0;
            height:2px;
            border-radius:4px;
            background:${props  => props.theme.textcolor};
            transition: all .2s;
        }
    `,
    "TabContent" : styled.div`
        width:100%
    `


}

export default style