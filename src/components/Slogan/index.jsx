import React, { useEffect, useLayoutEffect, useRef } from 'react'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'

function Slogan() {
   const curBackground = useSelector(state => state.backgrounds.current)
   const dispatch = useDispatch()
   const sloganRef = useRef(null)

   useEffect(() => {
      const handleChangeBackground = () => {
         const top = sloganRef.current.getBoundingClientRect().top
         const bottom = sloganRef.current.getBoundingClientRect().bottom

         if (top < window.innerHeight && bottom > 0 && curBackground.id !== 1) {
            dispatch({ type: 'change-background', id: 1 })
         }
      }

      window.addEventListener('scroll', handleChangeBackground)

      return () => {
         window.removeEventListener('scroll', handleChangeBackground)
      }
   }, [dispatch, curBackground.id])

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
