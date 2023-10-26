import React from 'react'
import Header from './header'
import Footer from './footer'
import { motion, AnimatePresence } from 'framer-motion'

const Layout = ({ children, location, handleCategoryFilter }) => {
  const broadcast = location?.pathname === '/broadcast/'
  return (
    <>
      <Header location={location} handleCategoryFilter={handleCategoryFilter} />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <main className='main'>{children}</main>
        </motion.div>
      </AnimatePresence>
      {!broadcast && (
        <Footer
          location={location}
          handleCategoryFilter={handleCategoryFilter}
        />
      )}
    </>
  )
}

export default Layout
