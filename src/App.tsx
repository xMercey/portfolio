import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer'
import { LandingPage } from './pages/LandingPage'
import { FinecashPage } from './projects/FinecashPage'


function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
 

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