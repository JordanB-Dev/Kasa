import { Route, Routes } from 'react-router-dom'
import Header from '../../layout/Header'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Footer from '../../layout/Footer'
import Error from '../../pages/Error'
import Accommodation from '../../pages/Accommodation'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing" element={<Accommodation />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
