import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'
import Header from './header'
import Footer from './footer'
// import { MenuProvider } from '../context/MenuContext'

type LayoutChildProps = {
  isHomePage: boolean
  children: React.ReactNode
  title: string
}

const LayoutChild: React.FC<LayoutChildProps> = ({ isHomePage, children, title }) => {
  return (
    <>
      <Header isHomePage={isHomePage} title={title} />

      <main className="">{children}</main>

      <Footer />
    </>
  )
}

export default LayoutChild
