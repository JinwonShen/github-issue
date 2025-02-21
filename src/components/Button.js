import styles from "./Button.module.css"

export default function Button({ style, children, type = "button", disable }) {
  return (
    <button
      className={styles.button}
      style={style}
      type={type}
      disable={disable}
    >
      {children}
    </button>
  )
}
