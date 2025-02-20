import React from "react"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"


const AccountDetail = () => {
    const param = useParams()
    const idx = param.idx

    const [backendState, setbackendState] = useState(null)

    const getAccountDetail = async () => {
        const response = await fetch(`/account/`,{})
        const result = await response.json()

        switch (response.status) {
            case 200:
                console.log(result.data)
                setbackendState(result.data)
            
                break
            case 400:
                console.log("idx값이 잘못")
                break
            case 404:
                console.log("해당정보는 존재 안함")
                break     
        }


    }

    // 컴포넌트가 처음 랜더링되고 나서 딱 한번만 실행되는 로직
    useEffect(() => {
        getAccountDetail()
    }, [])

   
    return(
        <>
        <p>아이디 : {backendState?.id}</p>
        <p>이름 : {backendState?.name}</p>
        </>
    )
}


export default AccountDetail
