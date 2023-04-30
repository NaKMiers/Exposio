import React, { useEffect, useRef } from 'react'
import styles from './styles.module.scss'

function Slogan() {
   const sloganRef = useRef(null)

   useEffect(() => {
      window.addEventListener('scroll', () => {
         const elementTop = sloganRef.current.getBoundingClientRect().top
         const elementBottom = sloganRef.current.getBoundingClientRect().bottom

         if (elementTop < window.innerHeight && elementBottom > 0) {
            sloganRef.current.classList.add(styles.fade)
         } else {
            sloganRef.current.classList.remove(styles.fade)
         }
      })
   }, [])

   return (
      <section className={`${styles.Slogan} ${styles.fade}`} ref={sloganRef}>
         <h1>CAPTURE MOMENTS, FIND INSPIRATION</h1>
      </section>
   )
}

export default Slogan
