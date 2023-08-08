import { Route, Routes } from "react-router-dom"
import AppFooter from "./components/AppFooter"
import AppHeader from "./components/AppHeader"
import Root from "./routes/Root"
import Edit from "./routes/Edit"


function App() {
  return (<div className="flex flex-col min-h-screen">
    <AppHeader />
    <Routes>
      <Route path="/" Component={Root} />
      <Route path="*" Component={Edit} />
    </Routes>
    <AppFooter />
  </div>)
}

export default App
