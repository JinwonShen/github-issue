import { useState } from "react"
import styles from "./Tabs.module.css"
import cx from "clsx"

const tabList = [
  "Code",
  "Issue",
  "Pull Request",
  "Actions",
  "Projects",
  "Security",
  "Insights",
  "Settings",
]

export default function Tabs() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  return (
    <ul className={styles.tabList}>
      {tabList.map((tab, idx) => (
        <Tab
          key={`${idx}`}
          title={tab}
          selected={selectedTabIndex === idx}
          onClick={() => setSelectedTabIndex(idx)}
        />
      ))}
    </ul>
  )
}

export function Tab({ title, selected, onClick, number }) {
  return (
    <li>
      <button
        onClick={onClick}
        className={cx(styles.tab, { [styles.selected]: selected })}
      >
        <span>{title}</span>
        {number && <div className={styles.circle}>{number}</div>}
      </button>
    </li>
  )
}
