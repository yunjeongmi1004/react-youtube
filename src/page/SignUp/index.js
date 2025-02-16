import React from "react"
import {useRef} from "react"


const Signup =  () => {

    const idInput = useRef()
    const pwInput = useRef()
    const nameInput = useRef()
    const birthInput = useRef()

    const signupEvent = async () => {
    const response = await fetch("http://3.39.66.6:8000/account", {
        "method" : "POST",
        "headers" : {
            "Content-Type" : "application/json"
        },
        "body" : JSON.stringify({
            "id" : idInput.current.value,
            "password": pwInput.current.value,
            "name": nameInput.current.value,
            "birth": birthInput.current.value,
        })
    })
    const result = await response.json()
        console.log(result)

        switch(response.status){
            case 200:
                alert("회원가입 성공")
                break
            case 400:
                alert("입력값에 문제가 있습니다")
                break
            case 409:
                alert("이미 존재하는 아이디 입니다.")
                break
            case 500:
                alert("알수없는 오류로 동작 불가")
                break
        }
    }
        return(
            <>
            <input type="text" ref={idInput} placeholder="아이디 (1~20자)" />
            <input type="text" ref={pwInput}  placeholder="비밀번호 (1~20자, 영어 소문자 최소 1개 포함, 숫자 최소 1개 포함)" />
            <input type="text" ref={nameInput} placeholder="이름 (1~10자)" />
            <input type="text" ref={birthInput} placeholder="생년월일 (yyyy-mm-dd)" />
            <button onClick={signupEvent}>회원가입</button>
            </>
        )
}

export default Signup