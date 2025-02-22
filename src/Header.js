import styles from "./Header.module.css"
import Button from "./components/Button"
import Space from "./components/Space"
import Tabs from "./components/Tabs"

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrap}>
        <div className={styles.projectContainer}>
          <a href="/" className={styles.userName}>
            shenjinwon
          </a>{" "}
          /{" "}
          <a href="/" className={styles.projectName}>
            github-issue-ex
          </a>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Watch <div className={styles.circle}>0</div>
          </Button>
          <Space />
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Fork <div className={styles.circle}>0</div>
          </Button>
          <Space />
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Star <div className={styles.circle}>0</div>
          </Button>
        </div>
      </div>
      <Tabs />
    </div>
  )
}
