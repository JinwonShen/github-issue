import styles from "./Badge.module.css"
// import cx from "clsx"

export default function Badge({ name, color }) {
  return (
    <span className={styles.badge} style={{ backgroundColor: `#${color}` }}>
      {name}
    </span>
  )
}
