import Blog from '../../components/Blog'
import Contact from '../../components/Contact'
import Gallery from '../../components/Gallery'
import Service from '../../components/Service'
import Slogan from '../../components/Slogan'
import styles from './styles.module.scss'

function HomePage() {
   return (
      <div className={styles.HomePage}>
         {/* SLOGAN */}
         <Slogan />

         {/* BLOG */}
         <Blog />

         {/* GALARY */}
         <Gallery />

         {/* SERVICE */}
         <Service />

         {/* CONTACT */}
         <Contact />

         {/* LOGO */}
         <section></section>
      </div>
   )
}

export default HomePage
