import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import BlogPage from './pages/BlogPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Layout1 = ({ children }) => {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   )
}

const Layout2 = ({ children }) => {
   return (
      <>
         <Header />
         {children}
      </>
   )
}

function App() {
   const curBg = useSelector(state => state.backgrounds.current)
   const [showScroll, setShowScroll] = useState(false)

   useLayoutEffect(() => {
      document.addEventListener('contextmenu', function (e) {
         e.preventDefault()
      })
   }, [])

   const handleScroll = useCallback(() => {
      setShowScroll(window.pageYOffset > 300)
   }, [])

   const handleScrollToTop = useCallback(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }, [])

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [handleScroll])

   return (
      <div className={styles.App}>
         <div
            className={styles.background}
            style={{
               background: `url(${curBg.bg})`,
            }}
         />
         <Routes>
            <Route
               path='/'
               exact={true}
               element={
                  <Layout1>
                     <HomePage />
                  </Layout1>
               }
            />
            <Route
               path='/blog/:id'
               exact={false}
               element={
                  <Layout2>
                     <BlogPage />
                  </Layout2>
               }
            />
            <Route path='/gallery/:id' exact={false} element={<GalleryPage />} />
         </Routes>

         <button
            className={styles.scrollToTopBtn}
            onClick={handleScrollToTop}
            style={{ display: showScroll ? 'block' : 'none' }}
         >
            <FontAwesomeIcon icon={faAngleUp} />
         </button>
      </div>
   )
}

export default App
