import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'

function App() {
   useEffect(() => {
      document.addEventListener('contextmenu', function (e) {
         e.preventDefault()
      })
   }, [])

   return (
      <div className={styles.App} style={{ backgroundImage: 'url(imgs/background1.jpg)' }}>
         {/* HEADER */}
         <Header />

         <Routes>
            <Route path='/' exact={true} element={<HomePage />} />
            <Route path='/blog' exact={false} element={<BlogPage />} />
         </Routes>

         {/* FOOTER */}
         <footer></footer>
      </div>
   )
}

export default App
