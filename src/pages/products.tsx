import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { graphql, PageProps } from 'gatsby'
import LayoutChild from '../components/layoutChild'
import Seo from '../components/seo'

const ProductPage = ({ data, location }: PageProps<GatsbyTypes.Query>) => {
  const language = useSelector((state: RootState) => state.language.language)
  return (
    <>
      <LayoutChild location={{ pathname: '/products' }} title="Products">
        <Seo title="Products" />
        <div className="child_wrapper flex flex-row">
          <h1 className="block basis-3/4 text-3xl font-semibold tracking-tight my-2 ">Products</h1>
          <h2 id="products#web" className="text-center">
            Degital
          </h2>
          <h2 id="products#instagram">Instagram</h2>
        </div>

        <article></article>
      </LayoutChild>
    </>
  )
}

export default ProductPage
