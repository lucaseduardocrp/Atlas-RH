import Image from 'next/image';
import styles from './styles.module.scss';

export default function Guarantee(props: {src: string, alt: string, title: string, text: string}) {
  return (
    <div>
      <div className={styles.container}>
        <Image src={props.src} width={50} height={50} alt={props.alt} />
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

