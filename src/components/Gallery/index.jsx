import React, { memo, useCallback, useLayoutEffect, useRef } from 'react'
import styles from './style.module.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { slugify } from '../../data'

function Gallery() {
   const galleries = useSelector(state => state.galleries)

   const galleryRef = useRef(null)
   const galleryContainerRef = useRef(null)

   const handleShow = useCallback(() => {
      const subElements = [...galleryRef.current.children]
      const elements = [
         ...subElements.slice(0, subElements.length - 1),
         ...galleryContainerRef.current.children,
      ]

      elements.forEach(element => {
         const eTop = element.getBoundingClientRect().top
         const eBottom = element.getBoundingClientRect().bottom

         if (eTop < window.innerHeight && eBottom > 0) {
            element.classList.add(styles.fade)
         }
      })
   }, [])

   const handleHide = useCallback(() => {
      const subElements = [...galleryRef.current.children]
      const elements = [
         ...subElements.slice(0, subElements.length - 1),
         ...galleryContainerRef.current.children,
      ]

      const eTop = galleryRef.current.getBoundingClientRect().top
      const eBottom = galleryRef.current.getBoundingClientRect().bottom

      if (eTop >= window.innerHeight || eBottom <= 0) {
         elements.forEach(element => {
            element.classList.remove(styles.fade)
         })
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
      <section className={styles.Gallery} ref={galleryRef} id='Gallery'>
         <h1>GALLERY</h1>
         <p>In this gallery you can see a selection of my work. I hope you enjoy</p>

         <div className={styles.galleryContainer} ref={galleryContainerRef}>
            {galleries.map((gallery, index) => (
               <div className={styles.galleryItem} key={gallery.image}>
                  <div>
                     <Link to={'/gallery/' + slugify(gallery.image)}>
                        <img src={gallery.image} alt='thumbnail' loading='lazy' />
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}

export default memo(Gallery)
