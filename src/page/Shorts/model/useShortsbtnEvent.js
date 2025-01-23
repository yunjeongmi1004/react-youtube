import React from "react"

const useShortsbtnEvent = () => {
    const [like, setLike] = React.useState(0)
    const activeLikeEvent = () => {
        setLike(like + 1)
    }
    
    return [like, activeLikeEvent]
}

export default useShortsbtnEvent