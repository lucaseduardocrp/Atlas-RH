import Button from "../Button";

import styles from './styles.module.scss';

export default function FreeAvaliation() {
  return(
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>Grandes decisões geram <br /> grandes resultados.</h2>
        <p>Não tenha medo de decidir e ver sua empresa crescer.</p>
      </div>
      <Button href="/Contact">Receber Avaliação Gratuita</Button>
    </section>
  )
}