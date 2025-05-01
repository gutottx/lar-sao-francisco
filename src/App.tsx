import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"


function App() {
  <div className="w-full bg-[#FAF4E3]">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"/>
        <Route path="/sobre"/>
        <Route path="/contato"/>
        <Route path="/animais"/>
        <Route path="/animais/:id"/>

        {/* ----- Proteger esta rota: ----- */}
        <Route path="/dashboard"/>
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
