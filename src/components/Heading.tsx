import styles from './Heading.module.css';

export function Heading(props) {
    // Como usar mais de uma classe no mesmo componente
    // return <h1 className={`${styles.heading} ${styles.cyan}`}>Olá Mundo!</h1>;
    console.log(props);
    return <h1 className={styles.heading}>{props.children}{props.attr}</h1>;
}
