import React from "react"
import Header from "./Header"
import Page from "../page"
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import ResetStyle from './styles/reset'
import theme from './styles/theme'


const App = () => {
    return (
        <> 
        <ThemeProvider theme={theme.lightTheme}>
            <GlobalStyle />
            <ResetStyle />
            <Header></Header>
            <Page></Page>
        </ThemeProvider>
        </>
    )
}

export default App