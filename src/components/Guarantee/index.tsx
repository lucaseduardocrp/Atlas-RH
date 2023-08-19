import Image from "next/image";
import styles from "./styles.module.scss";
import { GuaranteeInfos } from "@/modules/GuaranteeInfos";

export default function Guarantee() {
  return (
    <div>
      <section className={styles.guaranteeSection}>
        <div className={styles.title} data-aos="fade-down">
          <h2>Garantia total de satisfação</h2>
          <p>
            Sem fidelidade, cancele quando quiser e sempre com a melhor equipe
          </p>
        </div>
        <div className={styles.guaranteeGrid} data-aos="fade-up">
          {GuaranteeInfos.map((index, id) => (
            <div className={styles.container} key={id}>
              <Image
                src={index.imageUrl}
                width={50}
                height={50}
                alt={index.title}
              />
              <h3>{index.title}</h3>
              <p>{index.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
