import styles from './style.module.scss';
import CompanyStatistics from '@/components/CompanyStatistics';
import FreeAvaliation from '@/components/FreeAvaliation';
import { ValuesText } from '@/modules/CompanyValues';
import { DayList } from '@/modules/DayList';
import { TopicsText } from '@/modules/TopicsText';

export default function About() {
  return(
    <>
      <section className={styles.about}>
        <div className={styles.title}>
          <h1>Jovens, transparentes e <br /> orientados para resultados.</h1>
          <p>
            Como dizia Steve Jobs: os loucos que acham que podem mudar o mundo, são os que efetivamente o fazem. Não sei o quanto vamos mudar o mundo, mas estamos aqui para mudar o Brasil, uma empresa de cada vez.
          </p>
        </div>

        <div className={styles.topics}>
          {TopicsText.map((index, id) => 
            <div key={id}>
              <h2>{index.title}</h2>
              <p>{index.text}</p> 
            </div>
          )}
        </div>

        <div className={styles.values}>
          {ValuesText.map((index, id) => 
            <div className={styles.valueBox} key={id}>
              <h3>{index.title}</h3>
              <p>{index.text}</p> 
            </div>
          )}
        </div>

        <div className={styles.list}>
          <h2>Como isso se aplica nos nossos dias</h2>
          <ul>
            {DayList.map((index, id) => <li key={id}>{index.text}</li> )}
          </ul>
        </div>
      </section>
    
      <CompanyStatistics />

      <FreeAvaliation />
    </>
  )
}