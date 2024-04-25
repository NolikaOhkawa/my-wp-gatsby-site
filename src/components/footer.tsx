import React from 'react'

const Footer: React.FC = () => {
  return (
    <>
      <footer className="">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        And <a href="https://wordpress.org/">WordPress </a>
        by Norika Okawa
      </footer>
    </>
  )
}

export default Footer
