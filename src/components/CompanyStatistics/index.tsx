/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';

export default function CompanyStatistics() {
  return(
    <section className={styles.container}>  
      <div className={styles.title}>
        <h2>Por um Brasil melhor e mais empreendedor</h2>
        <p>
          Somos jovens, com energia, uma cultura forte, muito conhecimento e com uma paixão <br /> 
          inesgotável por empreendedorismo e ajudar nossos clientes. Nosso propósito é transformar o Brasil <br /> em um país melhor e mais empreendedor.
        </p>
      </div>

      <div className={styles.statistics}>
        <div className={styles.box}>
          <h4>+300</h4>
          <p>empresas atendidas</p>
        </div>
        <div className={styles.box}>
          <h4>23</h4>
          <p>estados brasileiros</p>
        </div>
        <div className={styles.box}>
          <h4>+20</h4>
          <p>segmentos atendidos</p>
        </div>
      </div>

      <img src="/Colaborators.png" alt="Colaborators" />
    </section>
  )
}