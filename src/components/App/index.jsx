import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../layout/Header'
import Home from '../../pages/Home'
import About from '../../pages/About'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Fragment>
  )
}

export default App
