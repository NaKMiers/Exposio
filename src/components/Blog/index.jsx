import React, { useLayoutEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { slugify } from '../../data'
import styles from './style.module.scss'

function Blog() {
   const blogs = useSelector(state => state.blogs)
   const blogRef = useRef(null)
   const blogContainerRef = useRef(null)

   useLayoutEffect(() => {
      const subElements = [...blogRef.current.children]
      const elements = [
         ...subElements.slice(0, subElements.length - 1),
         ...blogContainerRef.current.children,
      ]

      const handleScroll = () => {
         elements.forEach(element => {
            const eTop = element.getBoundingClientRect().top
            const eBottom = element.getBoundingClientRect().bottom

            if (eTop < window.innerHeight && eBottom > 0) {
               element.classList.add(styles.fade)
            } else {
               element.classList.remove(styles.fade)
            }
         })
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return (
      <section className={styles.Blog} ref={blogRef} id='Blog'>
         <h1>BLOG</h1>
         <p>Welcome to my blog. Here I will post news and updates.</p>

         <div className={styles.blogContainer} ref={blogContainerRef}>
            {blogs.map((blog, index) => (
               <div
                  className={`${styles.blogItem} ${index % 2 !== 0 ? styles.reverse : ''}`}
                  key={index}
               >
                  <Link to={`/blog/${slugify(blog.title)}`} className={styles.thumbnail}>
                     <img src={blog.thumbnail} alt='thumbnail' />
                  </Link>
                  <div className={styles.content}>
                     <h3>
                        <Link to={`/blog/${slugify(blog.title)}`}>{blog.title}</Link>
                     </h3>
                     <h5>{blog.date}</h5>

                     <p>{blog.content}</p>

                     {/* <button>Read More</button> */}
                     <Link to={`/blog/${slugify(blog.title)}`} className={styles.readBtn}>
                        Read More
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}

export default Blog
