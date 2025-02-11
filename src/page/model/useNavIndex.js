import React from "react"
import { useNavigate } from "react-router-dom"

const useNavIndex = () => {
    const [navIndex, setNavIndex] = React.useState(0)
    const navigate = useNavigate()


    const activeNavIndex = (idx, navIdx) => {
        setNavIndex(navIndex => !navIndex)
        if(navIdx !== null){
            navigate(navIdx)
        
            
        }else{
            alert('준비중')
        }
    }

    return [navIndex, setNavIndex, activeNavIndex]
}

export default useNavIndex