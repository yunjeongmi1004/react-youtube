import React from "react"
import Video from "./../Video"
import Mypage from "./../Mypage"
import Shorts from "./../Shorts"
import {Routes, Route, Navigate } from "react-router-dom"

const Container = () => {
    return(
        <section>
            <Routes>
                <Route path="/" element={<Navigate to="/home?page=1" replace />}/>
                <Route path="/home" element={<Video />} />
                <Route path="/shorts" element={<Shorts />} />
                <Route path="/mypage" element={<Mypage />} />
            </Routes>
        </section>
    )
}


export default Container