import React, { useState, useRef } from "react"
import { useNavigate } from "react-router-dom";


const Login =  () => {

    const [loginCheck, setLoginCheck] = useState(false); // 로그인 상태 체크

    const idInput = useRef()
    const pwInput = useRef()

    const navigate = useNavigate();

    const loginEvent = async () => {
    const response = await fetch("/account/login", {
        "method" : "POST",
        "headers" : {
            "Content-Type" : "application/json"
        },
        "body" : JSON.stringify({
            "id" : idInput.current.value,
            "password": pwInput.current.value,
        })
    })
    const result = await response.json()
    console.log(result)

    if(response.status === 200){
        alert("로그인 성공")
        setLoginCheck(true)
        navigate("/home?page=1")
    }else if(response.status === 400){
        alert("입력값에 문제가 있습니다")
        setLoginCheck(false)
    }else if(response.status === 404){
        alert("계정 정보가 존재하지 않습니다")
        setLoginCheck(false)
    }else if(response.status === 500){
        alert("알수없는 오류로 동작 불가")
        setLoginCheck(false)
    }
    }
        return(
            <>
            <input type="text" ref={idInput} placeholder="아이디 (1~20자)" />
            <input type="text" ref={pwInput}  placeholder="비밀번호 (1~20자, 영어 소문자 최소 1개 포함, 숫자 최소 1개 포함)" />
            <button onClick={loginEvent}>로그인</button>
            </>
        )
}

export default Login
