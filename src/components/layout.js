import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, location, handleCategoryFilter }) => {
  return (
    <>
      <Header location={location} handleCategoryFilter={handleCategoryFilter} />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
