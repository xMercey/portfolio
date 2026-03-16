import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer'
import { LandingPage } from './pages/LandingPage'
import { FinecashPage } from './projects/FinecashPage'
import { Header } from './components/Header'
import { useEffect, useState } from 'react'


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
      <div className="app-shell">
 
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/finecash" element={<FinecashPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App