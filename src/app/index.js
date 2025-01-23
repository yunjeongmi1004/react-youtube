import React from "react"
import Header from "./Header"
import Page from "../page"
import './styles/global.css'
import './styles/reset.css'

const App = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false)
  return (
      <>
      <Header setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen}></Header>
      <Page isNavOpen={isNavOpen}></Page>
      </>
  )
}

export default App