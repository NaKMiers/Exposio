import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt, faHeart } from '@fortawesome/free-regular-svg-icons'

function BlogPage() {
   return (
      <div className={styles.BlogPage}>
         <article className={styles.article}>
            <h1>ON THE ROAD</h1>
            <h5>27 April, 2023</h5>

            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum dictum congue.
               Vivamus sed porta risus, ut laoreet leo. Aliquam aliquam id diam at tincidunt. Ut
               adipiscing, mauris et bibendum consequat, nisl nulla vulputate turpis, ut hendrerit elit
               eros vel leo. Ut eu venenatis lectus. Mauris libero sem, sodales in sollicitudin at,
               iaculis eget turpis. Donec sodales lacus dolor, a dignissim dolor cursus et. Donec at
               vulputate massa, non consequat libero. Maecenas vehicula orci sit amet est facilisis
               eleifend. Ut bibendum et est a aliquet. Integer egestas egestas leo a luctus.
            </p>

            <div className={styles.thumbnail}>
               <img src='imgs/blog1.jpg' alt='thumbnail' />
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
               <button>
                  <FontAwesomeIcon icon={faAngleLeft} />
               </button>
               <button>
                  <FontAwesomeIcon icon={faBars} />
               </button>
               <button>
                  <FontAwesomeIcon icon={faAngleRight} />
               </button>
               <button>
                  <FontAwesomeIcon icon={faCommentAlt} />
               </button>
               <button>
                  <FontAwesomeIcon icon={faHeart} />
               </button>
            </div>
         </article>
      </div>
   )
}

export default BlogPage
