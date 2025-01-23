import React from "react"
import './style.css'
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
        <div className="player-wrap">
            <div className="player-box">
            </div>
            <div className="player-btns">
                {utilListdata.map((elem, idx) => 
                    <button className="btn-shorts" key={idx} onClick={elem.event}>
                        <span className={`btn-round ${elem.icon}`}></span>
                        <em>{elem.content}</em>
                    </button>
                )}
            </div>
        </div>
        </>
    )
}

export default Shorts