import { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

function Header() {
   const [openMenu, setOpenMenu] = useState(false)

   return (
      <header className={styles.Header}>
         <div className={styles.brand}>
            <p>EXPOSIO</p>
         </div>
         <button
            className={`${styles.menuButton} ${openMenu ? styles.rotate : ''}`}
            onClick={() => setOpenMenu(true)}
         >
            <div />
            <div />
            <div />
         </button>

         <div className={styles.menuModal} style={{ display: openMenu ? 'block' : 'none' }}>
            <button className={styles.closeBtn} onClick={() => setOpenMenu(false)}>
               <div />
               <div />
            </button>
            <div className={styles.menuBody}>
               <a href='#Home' onClick={() => setOpenMenu(false)}>
                  Home
               </a>
               <a href='#Blog' onClick={() => setOpenMenu(false)}>
                  Blog
               </a>
               <a href='#Gallery' onClick={() => setOpenMenu(false)}>
                  Gallery
               </a>
               <a href='#Service' onClick={() => setOpenMenu(false)}>
                  Service
               </a>
               <a href='#Contact' onClick={() => setOpenMenu(false)}>
                  Contact
               </a>
            </div>
         </div>

         <nav className={styles.navbar}>
            <div>
               <Link to='/'>Home</Link>
            </div>
            <div>
               <a href='#Blog'>Blog</a>
            </div>
            <div>
               <a href='#Gallery'>Gallery</a>
            </div>
            <div>
               <a href='#Gallery'>Service</a>
            </div>
            <div>
               <a href='#Contact'>Contact</a>
            </div>
         </nav>
      </header>
   )
}

export default memo(Header)
