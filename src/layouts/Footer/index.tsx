import Image from "next/image";

import styles from './styles.module.scss';
import Link from "next/link";

export default function Footer() {
  return(
    <footer className={styles.footerContainer}>
      <div className={styles.container}>
        <Link href="/">
          <Image src={'/FooterLogo.png'} width={160} height={52} alt="Colaborators" />
        </Link>
  
        <div className={styles.socialMedia}>
          {/* <a href="">
            <Image src={'/LinkedIn.svg'} width={37} height={37} alt="Colaborators" />
          </a> */}
          <a href="https://www.instagram.com/_atlasconsultoria/?igshid=NTc4MTIwNjQ2YQ%3D%3D">
            <Image src={'/Instagram.svg'} width={37} height={37} alt="Colaborators" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=5521970263146&text&type=phone_number&app_absent=0" target="_blank">
            <Image src={'/Whatsapp.svg'} width={37} height={37} alt="Colaborators" />
          </a>
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

      <p>
        00.000.000/0001-33 Atlas Consultoria de Recursos Humanos  LTDA Rua Fulano de Tal, 2023 - Centro, Rio de Janeiro - RJ, 00000-000 ©2023 Atlas Consultoria de RH™ . Todos os direitos  reservados. Built with a lot of ❤ by lucascrp
      </p>
    </footer>
  )
}