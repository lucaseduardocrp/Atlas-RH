/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';

export default function PlanBox() {
  return(
    <div className={styles.container}>
      <img src="/MapmindIcon.svg" alt="" />
      <div className={styles.text}>
        <h3>Etapa 1 - Mapeamento</h3>
        <p>
          Is simply dummy text Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys <br />
          standard dummy text ever since the 1500s, when an of the printing and
        </p>
      </div>
    </div>
  )
}