
import FirstText from '@/components/FirstText';
import PlanBox from '@/components/PlanBox';

import FreeAvaliation from '@/components/FreeAvaliation';
import CompanyStatistics from '@/components/CompanyStatistics';
import Guarantee from '@/components/Guarantee';

import styles from './style.module.scss';
import { PlanInfos } from '@/modules/PlanInfos';
import ServiceCards from '@/components/ServiceCards';
import { Services } from '@/modules/Services';

export default function ServicesPage() {
  return(
    <>
      <FirstText 
        text='A consultoria da Atlas elabora planejamento estratégico e conjuntos de processos que geram crescimento rápido e organizado, redução de custos, aumento de vendas, lucros e muito mais.'
      />

      <section className={styles.planSection}>
        <div className={styles.container}>
          <h2>Não planejar é planejar o fracasso</h2>
          <p>
            Nós criamos junto com você um planejamento estratégico, definimos os processos e pessoas ideais para organizar e expandir seu negócio sem que você empreendedor fique preso no operacional.
          </p>
          
          <div className={styles.container}>
            {PlanInfos.map((index, id) => 
              <PlanBox 
                title={index.title} 
                text={index.text} 
                src={index.imageUrl} 
                alt={index.title} 
                key={id} 
              />)};
          </div>
        </div>
      </section>
      
      <section className={styles.serviceSection}>
          <h2>Os serviços que proporcionam o <br /> maior avanço para a sua empresa</h2>

          <div className={styles.cardsContainer}>
            {Services.map((index, key) => 
              <ServiceCards 
                key={key} 
                title={index.title}
                description={index.description}
              />
            )};
          </div>
      </section>

      <Guarantee />

      <CompanyStatistics />

      <FreeAvaliation />
    </>
  )
}