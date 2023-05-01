import React, { useRef } from 'react'
import styles from './styles.module.scss'

function Contact() {
   const contactRef = useRef(null)

   return (
      <section className={styles.Contact} ref={contactRef} id='Contact'>
         <h1>CONTACT ME</h1>
      </section>
   )
}

export default Contact
