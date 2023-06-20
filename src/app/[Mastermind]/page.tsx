import { PlanInfos } from '@/modules/ArrayInfos';

import FirstText from '@/components/FirstText';
import PlanBox from '@/components/PlanBox';

import styles from './styles.module.scss';

export default function Mastermind() {
  return(
    <>
      <FirstText 
        text='A consultoria da Atlas elabora planejamento estratégico e conjuntos de processos que geram crescimento rápido e organizado, redução de custos, aumento de vendas, lucros e muito mais.'
      />

      <section className={styles.planSection}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>Não planejar é planejar o fracasso</h2>
            <p>
              Is simply dummy text Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys <br />
              standard dummy text ever since the 1500s, when an of the printing and
            </p>
          </div>
          
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
    </>
  )
}