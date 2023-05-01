import { useLayoutEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './App.module.scss'
import Header from './components/Header'
import BlogPage from './pages/BlogPage'
import HomePage from './pages/HomePage'

function App() {
   useLayoutEffect(() => {
      document.addEventListener('contextmenu', function (e) {
         e.preventDefault()
      })
   }, [])

   return (
      <div className={styles.App} style={{ backgroundImage: 'url(/imgs/background1.jpg)' }}>
         {/* HEADER */}
         <Header />

         <Routes>
            <Route path='/' exact={true} element={<HomePage />} />
            <Route path='/blog/:id' exact={false} element={<BlogPage />} />
         </Routes>

         {/* FOOTER */}
         <footer></footer>
      </div>
   )
}

export default App
