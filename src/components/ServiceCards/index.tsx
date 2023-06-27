import styles from './style.module.scss';

export default function ServiceCards(props: {title: string, description: string}) {
  return (
    <div className={styles.container}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}