import styles from './Heading.module.css';

export function Heading() {
    // Como usar mais de uma classe no mesmo componente
    // return <h1 className={`${styles.heading} ${styles.cyan}`}>Olá Mundo!</h1>;
    return <h1 className={styles.heading}>Olá Mundo!</h1>;
}
