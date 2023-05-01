import React, { useLayoutEffect, useRef } from 'react'
import styles from './styles.module.scss'

function Slogan() {
   const sloganRef = useRef(null)

   useLayoutEffect(() => {
      const handleScroll = () => {
         const elementTop = sloganRef.current.getBoundingClientRect().top
         const elementBottom = sloganRef.current.getBoundingClientRect().bottom

         if (elementTop < window.innerHeight && elementBottom > 0) {
            sloganRef.current.classList.add(styles.fade)
         } else {
            sloganRef.current.classList.remove(styles.fade)
         }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return (
      <section className={`${styles.Slogan} ${styles.fade}`} ref={sloganRef}>
         <h1>CAPTURE MOMENTS, FIND INSPIRATION</h1>
      </section>
   )
}

export default Slogan
