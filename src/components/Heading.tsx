import styles from './Heading.module.css';

type HeadingProps = {
    children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
    // Como usar mais de uma classe no mesmo componente
    // return <h1 className={`${styles.heading} ${styles.cyan}`}>Olá Mundo!</h1>;
    console.log(children);
    return <h1 className={styles.heading}>{children}</h1>;
}
