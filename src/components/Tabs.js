import styles from "./Tabs.module.css"
import cx from "clsx"
import { useLocation, Link } from "react-router-dom"

const tabList = [
  { name: "Code", pathname: "/Code" },
  { name: "Issue", pathname: "/issue" },
  { name: "Pull Request", pathname: "/pulls" },
  { name: "Actions", pathname: "/actions" },
  { name: "Projects", pathname: "/projects" },
  { name: "Security", pathname: "/security" },
]

export default function Tabs() {
  const { pathname } = useLocation()

  return (
    <ul className={styles.tabList}>
      {tabList.map((tab, idx) => (
        <Tab
          key={idx}
          item={tab}
          selected={(pathname === "/" ? "/issue" : pathname) === tab.pathname}
        />
      ))}
    </ul>
  )
}

export function Tab({ item, selected, number }) {
  return (
    <li>
      <Link to={item.pathname} className={styles.link}>
        <button className={cx(styles.tab, { [styles.selected]: selected })}>
          <span>{item.name}</span>
          {number && <div className={styles.circle}>{number}</div>}
        </button>
      </Link>
    </li>
  )
}
