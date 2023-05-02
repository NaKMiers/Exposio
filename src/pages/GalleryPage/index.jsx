import { faAngleLeft, faAngleRight, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { slugify } from '../../data'
import styles from './style.module.scss'

function GalleryPage() {
   const { id } = useParams()
   const galleries = useSelector(state => state.galleries)
   const index = galleries.findIndex(gallery => slugify(gallery.image) === id)
   const nextIndex = (index + 1) % galleries.length
   const prevIndex = (index - 1 + galleries.length) % galleries.length

   const { prev, data, next } = {
      prev: galleries[prevIndex].image,
      data: galleries[index].image,
      next: galleries[nextIndex].image,
   }

   const imageRef = useRef()

   useEffect(() => {
      imageRef.current.classList.remove(styles.fade)

      setTimeout(() => {
         imageRef.current.classList.add(styles.fade)
      }, 0)
   }, [data])

   return (
      <div className={styles.GalleryPage}>
         <Link className={styles.closeBtn} to='/#Gallery'>
            <FontAwesomeIcon icon={faClose} />
         </Link>
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
         <Link to={'/gallery/' + slugify(prev)} className={styles.leftBtn}>
            <FontAwesomeIcon icon={faAngleLeft} />
         </Link>
         <Link to={'/gallery/' + slugify(next)} className={styles.rightBtn}>
            <FontAwesomeIcon icon={faAngleRight} />
         </Link>

         <div className={styles.image}>
            <img src={data} alt='gallery' ref={imageRef} />
         </div>
      </div>
   )
}

export default memo(GalleryPage)
