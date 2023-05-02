import { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import BlogPage from './pages/BlogPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'

function App() {
   const curBg = useSelector(state => state.backgrounds.current)

   console.log(curBg)

   useLayoutEffect(() => {
      document.addEventListener('contextmenu', function (e) {
         e.preventDefault()
      })
   }, [])

   return (
      <div className={styles.App} style={{ backgroundImage: `url(${curBg.bg})` }}>
         {/* HEADER */}
         <Header />

         <Routes>
            <Route path='/' exact={true} element={<HomePage />} />
            <Route path='/blog/:id' exact={false} element={<BlogPage />} />
            <Route path='/gallery/:id' exact={false} element={<GalleryPage />} />
         </Routes>

         {/* FOOTER */}
         <Footer />
      </div>
   )
}

export default App
