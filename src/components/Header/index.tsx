'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import Navlink from "../Navlink";

import styles from './styles.module.scss';
import Image from "next/image";

export default function Header() {
  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(!active)
  }

  useEffect(() => {
    const handleScroll = () => {
      setActive(false);
    };

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return(
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href={'/'}>
          <Image src='/LogoDark.png' alt="Logo Atlas Consultoria de RH"  width={152} height={50}/>
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
              <Navlink href={'/'}>Início</Navlink>
            </li>
            <li>
              <Navlink href={'/About'}>Sobre nós</Navlink>
            </li>
            <li>
              <Navlink href={'/ServicesPage'}>Serviços</Navlink>
            </li>
            <li>
              <Navlink href={'/Contact'}>Contatos</Navlink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}