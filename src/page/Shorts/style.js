import styled from "styled-components"
const style = {
    "PlayerWrap" : styled.div`
        display:flex;
        width:100%;
        height:100%;
        align-items: flex-end;
        justify-content: center;
    `,
    "PlayerBox" : styled.div`
        width:400px;
        height:80vh;
        background:${props  => props.theme.textcolor};
        border-radius:30px;
        overflow:hidden;
    `,
    "PlayerBtns" : styled.div`
        display:flex;
        flex-direction: column;
        gap:10px;
        margin-left:16px;
    `,
    "BtnShorts" : styled.button`
        display:flex;
        flex-direction: column;
        justify-content: center;
        gap:10px;
        font-size:14px;

        & em{
            display:block;
            width:100%;
            text-align:center;
            color:${props  => props.theme.textcolor}
        }
    `,
     "BtnRound" : styled.span`
        display:flex;
        align-items:center;
        justify-content: center;
        width:48px;
        height:48px;
        border-radius:100%;
        background:${props  => props.theme.backgroundrgbblack};
     `
}

export default style