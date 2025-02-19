import cx from "clsx"
import { useState } from "react"

import styles from "./OpenClosedFilter.module.css"

function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      className={cx(styles.textFilter, { [styles.selected]: selected })}
      onClick={onClick}
    >
      {size} {state}
    </span>
  )
}

export default function OpenClosedFilters({ data }) {
  const [isOpenMode, setIsOpenMode] = useState(true)

  // const data = getData()
  // const openedData = data.filter((d) => d.state === 'open')
  // const closedData = data.filter((d) => d.state === 'close')

  const openModeDataSize = 1
  const closeModeDataSize = 2

  return (
    <>
      <OpenClosedFilter
        size={openModeDataSize}
        state="open"
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />

      <OpenClosedFilter
        size={closeModeDataSize}
        state="close"
        selected={!isOpenMode}
        onClick={() => setIsOpenMode(false)}
      />
    </>
  )
}
