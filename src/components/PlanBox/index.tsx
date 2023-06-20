/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';

export default function PlanBox(props: {title: string, text: string, src: string, alt: string}) {
  return(
    <div className={styles.container}>
      <img src={props.src} alt={props.alt} />
      <div className={styles.text}>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  )
}