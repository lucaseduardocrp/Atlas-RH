/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import CompanyStatistics from '@/components/CompanyStatistics';
import FirstText from "@/components/FirstText";
import FreeAvaliation from '@/components/FreeAvaliation';
import Guarantee from '@/components/Guarantee';

import styles from './styles.module.scss';
import { Services } from '@/modules/Services';

export default function Home() {
  return (
    <>
      <FirstText 
        text="Nossa equipe de consultores experientes e qualificados está pronta para colaborar com sua organização, trazendo conhecimentos atualizados e as melhores práticas em recursos humanos."
      />

      <section className={styles.productSection}>
        <div className={styles.title}>
          <h2>Serviços que decolam empresas</h2>
          <p>
            Para crescer é necessário muita experiência, processo e tecnologia. Adicionamos tudo isso <br />
            em produtos focados nas necessidades atuais e futuras da sua empresa.
          </p>
        </div>
        <div className={styles.grid}>
          <img src="/Mackbook.png" alt="Products Statistics" />
          <div className={styles.rigthContent}>
            <h3><strong>Mastermind Growth</strong></h3>
            <p>
              Focado em planejamento estratégico para sua empresa crescer no automático e alcançar os seus objetivos. <br />
              Nós desenvolvemos um planejamento de crescimento e expansão para empresas que buscam alcançar <br />
              resultados rápidos e sustentáveis. Veja o que você pode esperar:
            </p>
            <ul className={styles.list}>
              {Services.map((index, key) => 
                <li key={key}><img src='/CheckIcon.svg' alt={index.title}/>{index.title}</li> 
              )}
            </ul>
            <p>Ganhe um parceiro experiente para ajudar no crescimento e estruturação do sucesso da sua empresa.</p>
            <Link href={'/ServicesPage'}>Saiba mais</Link>
          </div>
        </div>
      </section>

      <CompanyStatistics />
      <Guarantee />
      <FreeAvaliation />      
    </>
  );
};
