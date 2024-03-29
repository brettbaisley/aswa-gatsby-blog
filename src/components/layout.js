import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading gradient-text">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="main-heading gradient-text" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="footer">
        © {new Date().getFullYear()} Brett Baisley ~ Powered by Gatsby ~ Made in New York
      </footer>
    </div>
  )
}

export default Layout
