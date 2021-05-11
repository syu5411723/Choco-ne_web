import { BrowserRouter } from "react-router-dom"

import GlobalStyles from './GlobalStyles'
import Home from './components/pages/Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Home />
      </BrowserRouter>
    </>
  )
}

export default App
