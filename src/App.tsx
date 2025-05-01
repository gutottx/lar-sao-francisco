import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { HomePage } from "./pages/HomePage"


function App() {
  return (
  <div className="w-full bg-[#FAF4E3]">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre"/>
        <Route path="/contato"/>
        <Route path="/animais"/>
        <Route path="/animais/:id"/>

        {/* ----- Proteger esta rota: ----- */}
        <Route path="/dashboard"/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
