import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.scss'

function Service() {
   const serviceRef = useRef(null)
   const serviceContainerRef = useRef(null)

   useLayoutEffect(() => {
      const subElements = [...serviceRef.current.children]
      const elements = [
         ...subElements.slice(0, subElements.length - 1),
         ...serviceContainerRef.current.children,
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
         const eTop = serviceRef.current.getBoundingClientRect().top
         const eBottom = serviceRef.current.getBoundingClientRect().bottom

         if (eTop >= window.innerHeight && eBottom <= 0) {
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
      <section className={styles.Service} ref={serviceRef} id='Service'>
         <h1>WHAT I OFFER</h1>
         <p>Below is a list of the services I offer. Contact me if you want to know more..</p>

         <div className={styles.serviceContainer} ref={serviceContainerRef}>
            <div className={styles.serviceItem}>
               <div className={styles.thumbnail}>
                  <img src='/imgs/ser1.jpg' alt='thumbnail' />
               </div>
               <div className={styles.content}>
                  <h3>Wedding</h3>
                  <h5>Photography</h5>

                  <p>
                     Mauris fermentum dictum congue. Vivamus sed porta risus ut laoreet leo. Aliquam
                     aliquam id diam at tincidunt.
                  </p>
               </div>
            </div>

            <div className={styles.serviceItem} style={{ marginTop: '15vh' }}>
               <div className={styles.thumbnail}>
                  <img src='/imgs/ser2.jpg' alt='thumbnail' />
               </div>
               <div className={styles.content}>
                  <h3>Business</h3>
                  <h5>Photography</h5>

                  <p>
                     Mauris fermentum dictum congue. Vivamus sed porta risus ut laoreet leo. Aliquam
                     aliquam id diam at tincidunt.
                  </p>
               </div>
            </div>

            <div className={styles.serviceItem} style={{ marginTop: '-15vh' }}>
               <div className={styles.thumbnail}>
                  <img src='/imgs/ser3.jpg' alt='thumbnail' />
               </div>
               <div className={styles.content}>
                  <h3>Product</h3>
                  <h5>Photography</h5>

                  <p>
                     Mauris fermentum dictum congue. Vivamus sed porta risus ut laoreet leo. Aliquam
                     aliquam id diam at tincidunt.
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Service
