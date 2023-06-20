import Image from "next/image";

import styles from './styles.module.scss';
import Link from "next/link";

export default function Footer() {
  return(
    <footer className={styles.footerContainer}>
      <div className={styles.container}>
        <Image src={'/FooterLogo.png'} width={160} height={52} alt="Colaborators" />
  
        <div className={styles.socialMedia}>
          <Image src={'/LinkedIn.svg'} width={37} height={37} alt="Colaborators" />
          <Image src={'/Instagram.svg'} width={37} height={37} alt="Colaborators" />
          <Image src={'/Whatsapp.svg'} width={37} height={37} alt="Colaborators" />
        </div>
      </div>
      <ul className={styles.footerLinks}>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/About'}>About Us</Link>
        </li>
        <li>
          <Link href={'/ServicesPage'}>Services</Link>
        </li>
        <li>
          <Link href={'/Contact'}>Contact</Link>
        </li>
      </ul>
    </footer>
  )
}