import styled from "styled-components"
const style = {
    "VideoWrap" : styled.div`
        display:flex;
        flex-wrap:wrap;
        gap:20px;
    `,
    "Paging" : styled.div`
        display:flex;
        justify-content: center;
        gap:10px;
        width:100%;
        height:40px;

        & button{
            width:30px;
            height:30px;
            border-radius:100%;
            color:var(--text-color);
            overflow:hidden;
        }

        & button.active{
            background:var(--text-color);
            color:var(--background-color);
        }
    `,
    "BtnPrev" : styled.button`
     
    `,
    "BtnNext" : styled.button`
       
    `,
    "BtnNumber" : styled.button`
        border:1px solid var(--border-line);
    `

}

export default style