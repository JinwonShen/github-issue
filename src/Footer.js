import styles from "./Footer.module.css"

const footerItems = [
  {
    title: "Terms",
    link: `https://docs.github.com/ko/site-policy/github-terms/github-terms-of-service`,
  },
  {
    title: "Privacy",
    link: `https://docs.github.com/ko/site-policy/privacy-policies/github-general-privacy-statement`,
  },
  {
    title: "Security",
    link: "https://github.com/security",
  },
  {
    title: "Status",
    link: "https://www.githubstatus.com/",
  },
  {
    title: "Docs",
    link: "https://docs.github.com/ko",
  },
  {
    title: "Contact",
    link: "https://support.github.com/?tags=dotcom-footer",
  },
  {
    title: "Pricing",
    link: "https://github.com/pricing",
  },
  {
    title: "API",
    link: "https://docs.github.com/en",
  },
  {
    title: "Training",
    link: "https://service.github.com/",
  },
  {
    title: "Blog",
    link: "https://github.blog/",
  },
  {
    title: "About",
    link: "https://github.com/about",
  },
]

export default function Footer() {
  return (
    <ul className={styles.footer}>
      {footerItems.map(({ link, title }) => (
        <li className={styles.item} key={title}>
          <a className={styles.link} href={link}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}
