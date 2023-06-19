import styles from './styles.module.scss';

import FirstText from "@/components/FirstText";
import PlanBox from "@/components/PlanBox";

export default function Home() {
  return (
    <>
      <FirstText text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of "/>

      <section className={styles.planSection}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>Não planejar é planejar o fracasso</h2>
            <p>
              Is simply dummy text Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys <br />
              standard dummy text ever since the 1500s, when an of the printing and
            </p>
          </div>
          <div>
            <PlanBox />
          </div>
        </div>
      </section>
    </>
  )
}
