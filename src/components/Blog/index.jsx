import React, { useEffect, useRef } from 'react'
import styles from './style.module.scss'

function Blog() {
   const blogRef = useRef(null)
   const blogContainerRef = useRef(null)

   useEffect(() => {
      const subElements = [...blogRef.current.children]
      const elements = [
         ...subElements.slice(0, subElements.length - 1),
         ...blogContainerRef.current.children,
      ]

      window.addEventListener('scroll', () => {
         elements.forEach(element => {
            const eTop = element.getBoundingClientRect().top
            const eBottom = element.getBoundingClientRect().bottom

            if (eTop < window.innerHeight && eBottom > 0) {
               element.classList.add(styles.fade)
            } else {
               element.classList.remove(styles.fade)
            }
         })
      })
   }, [])

   return (
      <section className={styles.Blog} ref={blogRef} id='Blog'>
         <h1>BLOG</h1>
         <p>Welcome to my blog. Here I will post news and updates.</p>

         <div className={styles.blogContainer} ref={blogContainerRef}>
            <div className={styles.blogItem}>
               <div className={styles.thumbnail}>
                  <img src='imgs/blog1.jpg' alt='thumbnail' />
               </div>
               <div className={styles.content}>
                  <h3>On the road</h3>
                  <h5>27 April, 2023</h5>

                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum dictum
                     congue. Vivamus sed porta risus, ut laoreet leo. Aliquam aliquam id diam at
                     tincidunt. Ut adipiscing, mauris et bibendum consequat, nisl nulla vulputate turpis,
                     ut hendrerit ...
                  </p>

                  <button>Read More</button>
               </div>
            </div>

            <div className={`${styles.blogItem} ${styles.reverse}`}>
               <div className={styles.thumbnail}>
                  <img src='imgs/blog2.jpg' alt='thumbnail' />
               </div>
               <div className={styles.content}>
                  <h3>Relaxing with sharks</h3>
                  <h5>27 April, 2023</h5>

                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum dictum
                     congue. Vivamus sed porta risus, ut laoreet leo. Aliquam aliquam id diam at
                     tincidunt. Ut adipiscing, mauris et bibendum consequat, nisl nulla vulputate turpis,
                     ut hendrerit ...
                  </p>

                  <button>Read More</button>
               </div>
            </div>

            <div className={styles.blogItem}>
               <div className={styles.thumbnail}>
                  <img src='imgs/blog3.jpg' alt='thumbnail' />
               </div>
               <div className={styles.content}>
                  <h3>Magic view</h3>
                  <h5>27 April, 2023</h5>

                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum dictum
                     congue. Vivamus sed porta risus, ut laoreet leo. Aliquam aliquam id diam at
                     tincidunt. Ut adipiscing, mauris et bibendum consequat, nisl nulla vulputate turpis,
                     ut hendrerit ...
                  </p>

                  <button>Read More</button>
               </div>
            </div>

            <div className={`${styles.blogItem} ${styles.reverse}`}>
               <div className={styles.thumbnail}>
                  <img src='imgs/blog4.jpg' alt='thumbnail' />
               </div>
               <div className={styles.content}>
                  <h3>In the night</h3>
                  <h5>27 April, 2023</h5>

                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum dictum
                     congue. Vivamus sed porta risus, ut laoreet leo. Aliquam aliquam id diam at
                     tincidunt. Ut adipiscing, mauris et bibendum consequat, nisl nulla vulputate turpis,
                     ut hendrerit ...
                  </p>

                  <button>Read More</button>
               </div>
            </div>

            <div className={styles.blogItem}>
               <div className={styles.thumbnail}>
                  <img src='imgs/blog5.jpg' alt='thumbnail' />
               </div>
               <div className={styles.content}>
                  <h3>In the air</h3>
                  <h5>27 April, 2023</h5>

                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum dictum
                     congue. Vivamus sed porta risus, ut laoreet leo. Aliquam aliquam id diam at
                     tincidunt. Ut adipiscing, mauris et bibendum consequat, nisl nulla vulputate turpis,
                     ut hendrerit ...
                  </p>

                  <button>Read More</button>
               </div>
            </div>

            <div className={`${styles.blogItem} ${styles.reverse}`}>
               <div className={styles.thumbnail}>
                  <img src='imgs/blog6.jpg' alt='thumbnail' />
               </div>
               <div className={styles.content}>
                  <h3>Northen light</h3>
                  <h5>27 April, 2023</h5>

                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum dictum
                     congue. Vivamus sed porta risus, ut laoreet leo. Aliquam aliquam id diam at
                     tincidunt. Ut adipiscing, mauris et bibendum consequat, nisl nulla vulputate turpis,
                     ut hendrerit ...
                  </p>

                  <button>Read More</button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Blog
