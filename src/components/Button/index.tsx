import Link from 'next/link';
import styles from './styles.module.scss';

export default function Button(props: {href: string, children: React.ReactNode}) {
  return(
      <Link href={props.href} className={styles.button}>
        {props.children}
      </Link>
  )
}