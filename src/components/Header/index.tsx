'use client'

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Navlink from "../Navlink";

import styles from './styles.module.scss';

export default function Header() {
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(!active)
  }

  return(
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href={'/'}>
          <Image src='/Logo.png' width={161} height={45} alt="Logo Atlas Consultoria de RH" />
        </Link>

        <div className={styles.menu}>
          <div
            onClick={handleActive}
            className={!active ? styles.mobileMenu : styles.mobileMenuActive}
          />
        </div>
        
        <div className={active ? styles.mobileMenuOpen : styles.mobileMenuClose}>
          <ul className={styles.navlist}>
            <li>
              <Navlink href={'/'}>Home</Navlink>
            </li>
            <li>
              <Navlink href={'/About'}>About Us</Navlink>
            </li>
            <li>
              <Navlink href={'/ServicesPage'}>Services</Navlink>
            </li>
            <li>
              <Navlink href={'/Contact'}>Contact</Navlink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}