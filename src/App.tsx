import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer'
import { LandingPage } from './pages/LandingPage'
import { FinecashPage } from './projects/FinecashPage'
import { Header } from './components/Header'
import { useEffect, useState } from 'react'
import { FigmaPage } from './projects/FigmaPage'
import { ColorPalettePage } from './projects/ColorPalettePage'
import { Product_mern } from './projects/Product_mern'


function App() {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem("theme", newMode ? "dark" : "light")
  }

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" :"light"
    )
  }, [darkMode])

  return (
    <BrowserRouter>
    <main className="app-main">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/finecash" element={<FinecashPage />} />
            <Route path="/figmaapp" element={<FigmaPage />} />
            <Route path="/colorpalette" element={<ColorPalettePage />} />
            <Route path='/mern-products' element={<Product_mern />} />
          </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  )
}

export default App