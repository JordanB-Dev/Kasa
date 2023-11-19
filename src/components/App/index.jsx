import { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../layout/Header'
import Home from '../../pages/Home'
import Footer from '../../layout/Footer'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App
