import Image from "next/image";
import Link from "next/link";

import Navlink from "../Navlink";

import styles from './styles.module.scss';

export default function Header() {
  return(
    <header>
      <nav className={styles.navbar}>
        <Link href={'/'}>
          <Image src='/Logo.png' width={181} height={60} alt="Logo Atlas Consultoria de RH" />
        </Link>
        
        <ul className={styles.navlist}>
          <li>
            <Navlink className={styles.navlink} href={'/'}>Home</Navlink>
          </li>
          <li>
            <Navlink className={styles.navlink} href={'/About'}>About Us</Navlink>
          </li>
          <li>
            <Navlink className={styles.navlink} href={''}>Services</Navlink>
          </li>
          <li>
            <Navlink className={styles.navlink} href={''}>Contact</Navlink>
          </li>
        </ul>
      </nav>
    </header>
  )
}