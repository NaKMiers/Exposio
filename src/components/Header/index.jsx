import { faBarChart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './style.module.scss'

function Header() {
   return (
      <header className={styles.Header}>
         <div className={styles.brand}>
            <p>EXPOSIO</p>
         </div>
         <button className={styles.menuButton}>
            <FontAwesomeIcon icon={faBarChart} />
         </button>
         <nav className={styles.navbar}>
            <div>
               <a href='#Home'>Home</a>
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

export default Header
