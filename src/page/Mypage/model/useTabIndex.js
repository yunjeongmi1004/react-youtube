import React from "react"

const useTabIndex = () => {
    const [currentTab, setCurrentTab] = React.useState(0)
    const activeTabIndex = (idx) => {
        setCurrentTab(idx)
    }
    return [currentTab, activeTabIndex]
}

export default useTabIndex