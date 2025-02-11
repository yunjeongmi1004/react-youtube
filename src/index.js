import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import {RecoilRoot} from "recoil"
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import theme from './styles/theme'

import App from "./app"

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
    <RecoilRoot>
        <ThemeProvider theme={theme.lightTheme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </RecoilRoot>
</BrowserRouter>
)