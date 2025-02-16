import { NavLink } from "react-router-dom"
import styled, { css } from "styled-components"

const style = {
    "NavStyle" : styled(NavLink)`
        position:relative;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:10px;
        width:100%;        
        transition: background-color 0.2s;
        margin-bottom:10px;
        &:hover{
          background-color:${props => props.theme.backgroundrgb};
        }

        
        ${props => props.$isnavopen
          ? css`
            flex-direction:row;
            width:calc(100% - 10px);
            height:42px;
            padding:0 10px;
            border-radius:10px;
            background-position:20px 50%;
            `
          : css`
            flex-direction:column;
            height:64px;
            border-radius:14px;
            `
        }

        ${props => props.$isnavopen && props.active && css`
            background-color:${props => props.theme.backgroundrgb};
        `}
    `,
    "BtnNavMenu" : styled.span`
        position:relative;
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        align-items:center;
        gap:10px;
        width:100%;
        height:42px;
        padding:0 10px;
        border-radius:10px;
        transition: background-color 0.2s;
        text-align:left;
        box-sizing:border-box;
        margin-top:10px;

        &:hover{
         background-color:${props => props.theme.backgroundrgb};
        }
    `,
    "NavTitle" : styled.span`
        width:100%;
        white-space: normal;
 

        ${props => props.$isnavopen
          ? css`
                text-align:left;
                font-size:14px;
            `
          : css`
                text-align:center;
                font-size:11px;
            `
        }
    `,
    "Nav" : styled.nav`
        position:fixed;
        top:56px;
        display:block;
        padding:20px 0 20px 10px;
        ${props => props.$isnavopen
          ? css`
              width: 240px;
            `
          : css`
              width: 72px;
            `
        }

    `,
    "Main" : styled.main`
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        width:calc(100% - 72px);
        margin-left:72px;
        margin-top:56px;
        padding:20px;

        ${props => props.$isnavopen
          && css`
            width:calc(100% - 240px);
            margin-left:240px;
            `
        }
    `,
    "Section" : styled.section`
        display:flex;
        flex-wrap:wrap;
        gap:20px;
        width:100%;
        height:100%;
    `
    

}

export default style