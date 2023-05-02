import React, { memo, useCallback, useEffect, useRef } from 'react'
import styles from './style.module.scss'
import { brands } from '../../data'

function Brand() {
   const brandRef = useRef(null)
   const titleRef = useRef(null)
   const brandContainer = useRef(null)

   const handleShow = useCallback(() => {
      const elements = [titleRef.current, ...brandContainer.current.children]

      elements.forEach(element => {
         const eTop = element.getBoundingClientRect().top
         const eBottom = element.getBoundingClientRect().bottom

         if (eTop < window.innerHeight && eBottom > 0) {
            element.classList.add(styles.fade)
         }
      })
   }, [])

   const handleHide = useCallback(() => {
      const elements = [titleRef.current, ...brandContainer.current.children]

      const eTop = brandRef.current.getBoundingClientRect().top
      const eBottom = brandRef.current.getBoundingClientRect().bottom

      if (eTop >= window.innerHeight || eBottom <= 0) {
         elements.forEach(element => {
            element.classList.remove(styles.fade)
         })
      }
   }, [])

   useEffect(() => {
      window.addEventListener('scroll', handleShow)
      window.addEventListener('scroll', handleHide)

      return () => {
         window.removeEventListener('scroll', handleShow)
         window.removeEventListener('scroll', handleHide)
      }
   }, [handleShow, handleHide])

   return (
      <section className={styles.Brand} ref={brandRef}>
         <h5 ref={titleRef}>We have worked with some of the most interesing companies in the world</h5>

         <div className={styles.brandContainer} ref={brandContainer}>
            {brands.map(brand => (
               <div className={styles.brandItem} key={brand.name}>
                  <div className={styles.image}>
                     <img src={brand.logo} alt='logo' />
                  </div>
                  <a href='empty' className={styles.content}>
                     <p>{brand.name}</p>
                     <p>{brand.country}</p>
                  </a>
               </div>
            ))}
         </div>
      </section>
   )
}

export default memo(Brand)
