import React from "react"
import s from "./style"
import useShortsbtnEvent from "./model/useShortsbtnEvent"

const Shorts = () => {
    const [like, activeLikeEvent] = useShortsbtnEvent()
    const utilListdata = [
        {
            title:'좋아요',
            icon:'like',
            event : activeLikeEvent,
            content : like,
        }, 
        {
            title:'싫어요',
            icon:'dislike',
            event : null,
            content: '싫어요'
        },
        {
            title:'댓글',
            icon:'comment',
            event : null,
            content : '댓글'
        },
        {
            title:'공유',
            icon:'share',
            event : null,
            content:'공유'
        },
        {
            title:'더보기',
            icon:'more',
            event : null,
            content:null
        },
    ]
    return(
        <>
        <s.PlayerWrap className="player-wrap">
            <s.PlayerBox className="player-box"></s.PlayerBox>
            <s.PlayerBtns className="player-btns">
                {utilListdata.map((elem, idx) => 
                    <s.BtnShorts className="btn-shorts" key={idx} onClick={elem.event}>
                        <s.BtnRound></s.BtnRound>
                        <em>{elem.content}</em>
                    </s.BtnShorts>
                )}
            </s.PlayerBtns>
        </s.PlayerWrap>
        </>
    )
}

export default Shorts