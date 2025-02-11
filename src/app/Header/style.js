import styled from "styled-components"

import search from './assets/search.svg'
import notifications from './assets/notifications.svg'

const style = {
    "Header" : styled.header`
        z-index:1;
        position:fixed;
        top:0;
        display:flex;
        justify-content: space-between;
        align-items:center;
        width:100%;
        height:56px;
        padding:0 16px;
        gap:16px;
        background:${props  => props.theme.backgroundcolor};

        & img{
            width:100%;
        }

        & *{
        flex-shrink: 0;
        }
    `,
    "H1" : styled.h1`
        width:90px;
        height:20px;
        margin-left:20px;
    `,
    "BtnAllmenu" : styled.button`
        width:24px;
        height:24px;
        margin-left:10px;
    `,
    "BtnSearch" : styled.button`
        display:flex;
        justify-content:center;
        align-items:center;
        width:64px;
        height:40px;
        background-color:≈
        border-radius:0 20px 20px 0;
        border-left:1px solid ${props  => props.theme.borderline}
        transition: background-color 0.2s;

        &:hover{
         background-color:${props  => props.theme.backgroundrgbhover}
        }
        &:before{
            content:'';
            display:block;
            width:20px;
            height:20px;
            background:url('${search}') no-repeat 0 0 / 20px auto;
        }
    `,
    "BtnVideomake" : styled.button`
        display:flex;
        align-items:center;
        justify-content:center;
        padding:0 10px 0 10px;
        height:36px;
        line-height:36px;
        border-radius:20px;
        font-size:14px;
        color:${props  => props.theme.textcolor};
        background-color:${props  => props.theme.backgroundrgbhover};
        transition: background-color 0.2s;

        &:before{
            content:'';
            display:block;
            width:30px;
            height:30px;
            margin:0 -4px;
            background: linear-gradient(#444 0 0), linear-gradient(#444 0 0);
            background-position: center;
            background-size: 40% 1px, 1px 40%;
            background-repeat: no-repeat;
        }

        &:hover{
           ${props  => props.theme.backgroundrgbhover};
        }
    `,
    "BtnNoti" : styled.button`
        width:36px;
        height:36px;
        border-radius:100%;
        transition: background-color 0.2s;

        &:hover{
         ${props  => props.theme.backgroundrgbhover};
        }

        &:before{
            content:'';
            display:block;
            width:24px;
            height:24px;
            margin:0 auto;
            background-image:url('${notifications}');
            background-position:center;
            background-size:24px;
            background-repeat:no-repeat;
        }
    `,
    "BtnMyprofile" : styled.button`
        width:36px;
        height:36px;
        border-radius:100%;
        overflow:hidden;
        & img{
            width:100%;
            object-fit: cover;
        }
    `,
    "SearchMain" : styled.div`
        display:flex;
        flex:1;
        justify-content: center;
    `,
    "SearchBox" : styled.div`
        display:flex;
        justify-content:space-between;
        width:592px;
        height:40px;
        border:1px solid ${props  => props.theme.borderline};
        border-radius:20px;
    `,
    "SearchInput" : styled.input`
        flex:1;
        border:0;
        height:100%;
        border-radius:20px 0 0 20px;
        padding:0 20px;
        background-color:${props  => props.theme.backgroundcolor};
        color:${props  => props.theme.textcolor};
    `,
}

export default style