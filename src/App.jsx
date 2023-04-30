import { useEffect, useRef } from 'react'
import styles from './App.module.scss'
import Header from './components/Header'
import Slogan from './components/Slogan'
import Blog from './components/Blog'

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

         {/* SLOGAN */}
         <Slogan />

         {/* BLOG */}
         <Blog />

         {/* GALARY */}
         <section></section>

         {/* SERVICE */}
         <section></section>

         {/* CONTACT */}
         <section></section>

         {/* LOGO */}
         <section></section>

         {/* FOOTER */}
         <footer></footer>
      </div>
   )
}

export default App
