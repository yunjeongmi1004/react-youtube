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
            overflow:hidden;
        }
    `,
    "BtnPrev" : styled.button`
     
    `,
    "BtnNext" : styled.button`
       
    `,
    "BtnNumber" : styled.button`
        border:1px solid var(--border-line);
        color: ${(props) => props.$pageindex  ? props.theme.borderline : props.theme.textcolor};
        background : ${(props) => props.$pageindex  ?  props.theme.textcolor : props.theme.borderline}
    `

}

export default style