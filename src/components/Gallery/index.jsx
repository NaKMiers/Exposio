import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.scss'

function Gallery() {
   const galleryRef = useRef(null)
   const galleryContainerRef = useRef(null)

   useLayoutEffect(() => {
      const subElements = [...galleryRef.current.children]
      const elements = [
         ...subElements.slice(0, subElements.length - 1),
         ...galleryContainerRef.current.children,
      ]

      const handleShow = () => {
         elements.forEach(element => {
            const eTop = element.getBoundingClientRect().top
            const eBottom = element.getBoundingClientRect().bottom

            if (eTop < window.innerHeight && eBottom > 0) {
               element.classList.add(styles.fade)
            }
         })
      }

      const handleHide = () => {
         const eTop = galleryRef.current.getBoundingClientRect().top
         const eBottom = galleryRef.current.getBoundingClientRect().bottom

         if (eTop >= window.innerHeight || eBottom <= 0) {
            elements.forEach(element => {
               element.classList.remove(styles.fade)
            })
         }
      }

      window.addEventListener('scroll', handleShow)
      window.addEventListener('scroll', handleHide)

      return () => {
         window.removeEventListener('scroll', handleShow)
         window.removeEventListener('scroll', handleHide)
      }
   }, [])

   return (
      <section className={styles.Gallery} ref={galleryRef} id='Gallery'>
         <h1>GALLERY</h1>
         <p>In this gallery you can see a selection of my work. I hope you enjoy</p>

         <div className={styles.galleryContainer} ref={galleryContainerRef}>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal1.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal2.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal3.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal4.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal5.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal7.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal8.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal9.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal10.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal11.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal12.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal13.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal14.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal15.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal16.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal17.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal18.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal19.jpg' alt='thumbnail' />
               </div>
            </div>
            <div className={styles.galleryItem}>
               <div>
                  <img src='/imgs/gal20.jpg' alt='thumbnail' />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Gallery
