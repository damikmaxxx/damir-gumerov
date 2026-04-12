import styles from "./TagTitle.module.scss"

export default function TagTitle({children} : {children: React.ReactNode}) {
    return (
        <span className={styles.tag}>{children}</span>
    )
}