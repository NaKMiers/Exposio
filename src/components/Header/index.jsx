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
            <div>Home</div>
            <div>Gallery</div>
            <div>Blog</div>
            <div>Contact</div>
         </nav>
      </header>
   )
}

export default Header
