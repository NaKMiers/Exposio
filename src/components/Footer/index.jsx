import React, { memo, useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import styles from './style.module.scss'
import { useDispatch, useSelector } from 'react-redux'

function Footer() {
   const dispatch = useDispatch()
   const curBackground = useSelector(state => state.backgrounds.current)

   const footerRef = useRef(null)

   const handleChangeBackground = useCallback(() => {
      const top = footerRef.current.getBoundingClientRect().top
      const bottom = footerRef.current.getBoundingClientRect().bottom

      if (top < window.innerHeight && bottom > 0 && curBackground.id !== 3) {
         dispatch({ type: 'change-background', id: 3 })
      }
   }, [curBackground.id, dispatch])

   useEffect(() => {
      window.addEventListener('scroll', handleChangeBackground)

      return () => {
         window.removeEventListener('scroll', handleChangeBackground)
      }
   }, [handleChangeBackground])

   const handleShow = useCallback(() => {
      const elements = [...footerRef.current.children]

      elements.forEach(element => {
         const eTop = element.getBoundingClientRect().top
         const eBottom = element.getBoundingClientRect().bottom

         if (eTop < window.innerHeight && eBottom > 0) {
            element.classList.add(styles.fade)
            footerRef.current.classList.add(styles.fade2)
         }
      })
   }, [])

   const handleHide = useCallback(() => {
      const elements = [...footerRef.current.children]

      const eTop = footerRef.current.getBoundingClientRect().top
      const eBottom = footerRef.current.getBoundingClientRect().bottom

      if (eTop >= window.innerHeight || eBottom <= 0) {
         elements.forEach(element => {
            element.classList.remove(styles.fade)
         })
         footerRef.current.classList.remove(styles.fade2)
      }
   }, [])

   useLayoutEffect(() => {
      window.addEventListener('scroll', handleShow)
      window.addEventListener('scroll', handleHide)

      return () => {
         window.removeEventListener('scroll', handleShow)
         window.removeEventListener('scroll', handleHide)
      }
   }, [handleShow, handleHide])

   return (
      <footer className={styles.Footer} ref={footerRef}>
         <h2>Exposio</h2>

         <p>Anh Khoa Nguyen</p>
         <p>Tan Phu District, Ho Chi Minh City, Vietnam</p>
         <p>Phone: +84 899 320 427</p>
         <p>diwas118151@gmail.com</p>

         <div className={styles.socialWrap}>
            <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
               <img src='/imgs/facebook.png' alt='social' />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
               <img src='/imgs/pinterest.png' alt='social' />
            </a>
            <a href='https://www.pinterest.com' target='_blank' rel='noreferrer'>
               <img src='/imgs/twitter.png' alt='social' />
            </a>
            <a href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
               <img src='/imgs/linkedin.png' alt='social' />
            </a>
         </div>

         <p>© Exposio. All rights reserved.</p>
      </footer>
   )
}

export default memo(Footer)
