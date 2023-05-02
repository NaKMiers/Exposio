import React, { memo, useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'

function Slogan() {
   const curBackground = useSelector(state => state.backgrounds.current)
   const dispatch = useDispatch()
   const sloganRef = useRef(null)

   const handleChangeBackground = useCallback(() => {
      const top = sloganRef.current.getBoundingClientRect().top
      const bottom = sloganRef.current.getBoundingClientRect().bottom

      if (top < window.innerHeight && bottom > 0 && curBackground.id !== 1) {
         dispatch({ type: 'change-background', id: 1 })
      }
   }, [curBackground.id, dispatch])

   useEffect(() => {
      window.addEventListener('scroll', handleChangeBackground)

      return () => {
         window.removeEventListener('scroll', handleChangeBackground)
      }
   }, [handleChangeBackground])

   const handleScroll = useCallback(() => {
      const eTop = sloganRef.current.getBoundingClientRect().top
      const eBottom = sloganRef.current.getBoundingClientRect().bottom

      if (eTop < window.innerHeight && eBottom > 0) {
         sloganRef.current.classList.add(styles.fade)
      } else {
         sloganRef.current.classList.remove(styles.fade)
      }
   }, [])

   useLayoutEffect(() => {
      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [handleScroll])

   return (
      <section className={`${styles.Slogan} ${styles.fade}`} ref={sloganRef}>
         <h1>CAPTURE MOMENTS, FIND INSPIRATION</h1>
      </section>
   )
}

export default memo(Slogan)
