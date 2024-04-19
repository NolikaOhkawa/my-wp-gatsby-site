import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import parse from 'html-react-parser'
import { Bars3Icon } from '@heroicons/react/24/outline'

interface HeaderProps {
  isHomePage: boolean
  title: string
}

const Header: React.FC<HeaderProps> = ({ isHomePage, title }) => {
  return (
    <header className="global-header bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="testClass -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            // onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
          </button>
        </div>
      </nav>
      {isHomePage ? (
        <h1 className="main-heading">
          <Link to="/">{parse(title)}</Link>
        </h1>
      ) : (
        <Link className="header-link-home" to="/">
          {title}
        </Link>
      )}
    </header>
  )
}

export default Header
