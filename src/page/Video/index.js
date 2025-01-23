import React from "react"
import Item from "./ui/Item"
import './style.css'
import {useNavigate , useSearchParams} from "react-router-dom"
import thumdata from "./assets/thum.jpg"

const Video = () => {

    const navigate = useNavigate()
    const [searchParam, setSearchParam] = useSearchParams()

    const videoitems = [
      {
      id:0,
      title:"1𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
      imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:1,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
      imgprofile: thumdata,
      time:"50:37"
      },
      {
      id:2,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
    imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:3,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
    imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:4,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
    imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:5,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
    imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:6,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
    imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:7,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
    imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:8,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
    imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:9,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
    imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:10,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
    imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:11,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
    imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:12,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
      imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:13,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
      imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:14,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
      imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:15,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
      imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:16,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
      imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:17,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
      imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:18,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
      imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:19,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
      imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:20,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
      imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:21,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
      imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:22,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
      imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:23,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
      imgprofile: thumdata,
      time:"1:50:37"
      },
      {
      id:24,
      title:"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 도입부가 너무 좋아 미쳐버린 팝송만 모아봤어요 | 제발 한번만 들어주세요",
      username:"때껄룩",
      views:"170",
      date:"4개월 전",
      imgthumurl: thumdata,
      imgprofile: thumdata,
      time:"1:50:37"
      },
    ]
    const totalPage = Math.ceil(videoitems.length/10)
    const pageIndex = parseInt(searchParam.get("page"))
    console.log(typeof pageIndex)
    const currentPage = videoitems.slice((pageIndex - 1) * 10, pageIndex * 10)


    return(
      <>
        <div className="video-wrap">
          {[...Array(totalPage)].map((elem, idx) => {
            return (pageIndex === idx + 1 && currentPage.map((elem) =><Item key={elem.id} videodata={elem}/>))
          })}
        </div>
        <div className="paging">
           {[...Array(totalPage)].map((elem, idx) => {
              return (<button className={pageIndex === idx + 1 ? 'active' : null} key={idx} onClick={() => navigate(`/home?page=${idx + 1}`)}>{idx + 1}</button>)
           })}
        </div>
      </>
    )
}

export default Video