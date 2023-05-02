import { faCommentAlt, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faAngleLeft, faAngleRight, faBars, faHeart as Loved } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { memo, useCallback, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { slugify } from '../../data'
import styles from './style.module.scss'

function BlogPage() {
   const { id } = useParams()
   const blogs = useSelector(state => state.blogs)
   const dispatch = useDispatch()

   const index = blogs.findIndex(blog => slugify(blog.title) === id)
   const prevIndex = index === 0 ? blogs.length - 1 : index - 1
   const nextIndex = index === blogs.length - 1 ? 0 : index + 1

   const { prev, data, next } = {
      prev: slugify(blogs[prevIndex].title),
      data: blogs[index],
      next: slugify(blogs[nextIndex].title),
   }

   const [openCmt, setOpenCmt] = useState(false)
   const [openCf, setOpenCf] = useState(false)
   const commentModalRef = useRef(null)
   const commentBodyRef = useRef(null)
   const confirmModalRef = useRef(null)
   const confirmBodyRef = useRef(null)

   const handleLike = useCallback(() => {
      dispatch({ type: 'like', id })
   }, [dispatch, id])

   const handleSubmitComment = useCallback(e => {
      e.preventDefault()
      setOpenCf(true)
   }, [])

   const handleCloseCommentModal = useCallback(e => {
      if (commentBodyRef.current && !commentBodyRef.current.contains(e.target)) {
         setOpenCmt(false)
      }
   }, [])

   const handleCloseConfirmModal = useCallback(e => {
      if (confirmBodyRef.current && !confirmBodyRef.current.contains(e.target)) {
         setOpenCf(false)
      }
   }, [])

   return (
      <div className={styles.BlogPage}>
         <article className={styles.article}>
            <h1>{data.title}</h1>
            <h5>{data.date}</h5>

            <p>{data.content}</p>

            <div className={`${styles.thumbnail} ${styles.fade}`}>
               <img src={data.thumbnail} alt='thumbnail' />
            </div>

            <div className={styles.social}>
               <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                  Twitter
               </a>
               <a href='https://www.pinterest.com/' target='_blank' rel='noreferrer'>
                  Pinterest
               </a>
               <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                  Facebook
               </a>
               <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
                  Lindedln
               </a>
            </div>

            <div className={styles.buttonWrap}>
               <Link to={'/blog/' + prev} className={styles.btn}>
                  <FontAwesomeIcon icon={faAngleLeft} />
               </Link>
               <Link to='/#Blog' className={styles.btn}>
                  <FontAwesomeIcon icon={faBars} />
               </Link>
               <Link to={'/blog/' + next} className={styles.btn}>
                  <FontAwesomeIcon icon={faAngleRight} />
               </Link>
               <button className={styles.btn} onClick={() => setOpenCmt(true)}>
                  <FontAwesomeIcon icon={faCommentAlt} />
               </button>
               <button onClick={handleLike} className={styles.btn}>
                  <FontAwesomeIcon icon={data.like ? Loved : faHeart} />
               </button>
            </div>

            <div
               className={styles.commentModal}
               ref={commentModalRef}
               onClick={handleCloseCommentModal}
               style={{ display: openCmt ? 'block' : 'none' }}
            >
               <form className={styles.commentBody} onSubmit={handleSubmitComment} ref={commentBodyRef}>
                  <h1>{data.title}</h1>

                  <div className='mui-textfield mui-textfield--float-label'>
                     <textarea type='text' id='comment' comment='comment' required rows={1} />
                     <label htmlFor='comment'>Your Comment</label>
                  </div>

                  <div className='mui-textfield mui-textfield--float-label'>
                     <input type='text' id='name' name='name' required />
                     <label htmlFor='name'>Your Name</label>
                  </div>

                  <div className='mui-textfield mui-textfield--float-label'>
                     <input type='text' id='email' email='email' required />
                     <label htmlFor='email'>Your Email - Will not be public</label>
                  </div>

                  <button className={styles.commentBtn}>Comment</button>
               </form>
            </div>

            <div
               className={styles.confirmModal}
               style={{ display: openCf ? 'block' : 'none' }}
               ref={confirmModalRef}
               onClick={handleCloseConfirmModal}
            >
               <div className={styles.confirmBody} ref={confirmBodyRef}>
                  <p>Are you sure that you want to submit?</p>

                  <div className={styles.confirmBtnWrap}>
                     <button onClick={() => setOpenCf(false)}>No</button>
                     <button onClick={() => setOpenCf(false)}>Yes</button>
                  </div>
               </div>
            </div>
         </article>
      </div>
   )
}

export default memo(BlogPage)
