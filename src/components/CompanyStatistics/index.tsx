import styles from "./styles.module.scss";

export default function CompanyStatistics() {
  return (
    <section className={styles.container}>
      <div className={styles.title} data-aos="fade-down">
        <h2>Por um Brasil melhor e mais empreendedor</h2>
        <p>
          Somos jovens, com energia, uma cultura forte, muito conhecimento e com
          uma paixão <br />
          inesgotável por empreendedorismo e ajudar nossos clientes. Nosso
          propósito é transformar o Brasil <br /> em um país melhor e mais
          empreendedor.
        </p>
      </div>

      <div className={styles.statistics}>
        <div className={styles.box} data-aos="fade-up">
          <span>+100</span>
          <p>empresas atendidas</p>
        </div>
        <div className={styles.box} data-aos="fade-up">
          <span>13</span>
          <p>estados brasileiros</p>
        </div>
        <div className={styles.box} data-aos="fade-up">
          <span>+20</span>
          <p>segmentos atendidos</p>
        </div>
      </div>
    </section>
  );
}
