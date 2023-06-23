/* eslint-disable @next/next/no-img-element */
import Button from '../Button';
import styles from './styles.module.scss';

export default function FirstText(props: {text: string}) {
  return(
    <section className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.text}>
          <h1>
            Processos organizados para<br />
            <strong>sua empresa crescer</strong> <br /> 
            no automático
          </h1>
          <p>{props.text}</p>
        </div>
        <div className={styles.buttonContent}>
          <Button href='/About'>Sobre nós</Button>
          <Button href='/Contact'>Contate-me</Button>
        </div>
      </div>
      <div className={styles.atlasImage}>
        <img src='/LogoWhite.png' alt='Atlas Consultoria de RH Logo'/>
      </div>
    </section>
  )
}