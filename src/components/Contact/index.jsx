import React, { memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux'

function Contact() {
   const curBackground = useSelector(state => state.backgrounds.current)
   const dispatch = useDispatch()
   const contactRef = useRef(null)
   const titleRef = useRef(null)
   const formRef = useRef(null)
   const confirmModalRef = useRef(null)
   const confirmBodyRef = useRef(null)
   const [openCf, setOpenCf] = useState(false)

   const handleChangeBackground = useCallback(() => {
      const top = contactRef.current.getBoundingClientRect().top
      const bottom = contactRef.current.getBoundingClientRect().bottom

      if (top < window.innerHeight && bottom > 0 && curBackground.id !== 2) {
         dispatch({ type: 'change-background', id: 2 })
      }
   }, [curBackground.id, dispatch])

   useEffect(() => {
      window.addEventListener('scroll', handleChangeBackground)

      return () => {
         window.removeEventListener('scroll', handleChangeBackground)
      }
   }, [handleChangeBackground])

   const handleShow = useCallback(() => {
      const elements = [titleRef.current, ...formRef.current.children]

      elements.forEach(element => {
         const eTop = element.getBoundingClientRect().top
         const eBottom = element.getBoundingClientRect().bottom

         if (eTop < window.innerHeight && eBottom > 0) {
            element.classList.add(styles.fade)
            contactRef.current.classList.add(styles.fade2)
         }
      })
   }, [])

   const handleHide = useCallback(() => {
      const elements = [titleRef.current, ...formRef.current.children]

      const eTop = contactRef.current.getBoundingClientRect().top
      const eBottom = contactRef.current.getBoundingClientRect().bottom

      if (eTop >= window.innerHeight || eBottom <= 0) {
         elements.forEach(element => {
            element.classList.remove(styles.fade)
         })
         contactRef.current.classList.remove(styles.fade2)
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

   const handleSubmit = e => {
      e.preventDefault()
      setOpenCf(true)
   }

   const handleCloseConfirmModal = e => {
      if (confirmBodyRef.current && !confirmBodyRef.current.contains(e.target)) {
         setOpenCf(false)
      }
   }

   return (
      <section className={styles.Contact} ref={contactRef} id='Contact'>
         <div className={styles.contactBody}>
            <h1 ref={titleRef}>CONTACT ME</h1>
            <form className={styles.contactForm} onSubmit={handleSubmit} ref={formRef}>
               <div className='mui-textfield mui-textfield--float-label'>
                  <input type='text' id='name' name='name' required />
                  <label htmlFor='name'>Your name</label>
               </div>

               <div className='mui-textfield mui-textfield--float-label'>
                  <input type='text' id='email' email='email' required />
                  <label htmlFor='email'>Your email</label>
               </div>

               <div className='mui-textfield mui-textfield--float-label'>
                  <textarea type='text' id='comment' comment='comment' required rows={1} />
                  <label htmlFor='comment'>Your message</label>
               </div>

               <button className={styles.sendBtn}>Send</button>
            </form>

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
         </div>
      </section>
   )
}

export default memo(Contact)
