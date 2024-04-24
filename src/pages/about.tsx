import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { graphql, PageProps } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

interface Post {
  date: string
  id: string
  title: string
}

const AboutPage = ({ data, location }: PageProps<GatsbyTypes.Query>) => {
  const posts = data.allWpPost.nodes

  const language = useSelector((state: RootState) => state.language.language)

  const myIntroduction = [
    {
      lang: 'en',
      name: 'Norika Okawa',
      description:
        "UI/UX Designer and Front-end Developer. I've worked as a web designer for over 10 years in the Tech industry in Japan and Canada, responsible for branding, art direction, UI/UX design, and front-end development for websites and mobile apps. My extensive experience and background in graphic design allow me to bridge the gap between design and development to create the most beautiful and highly functional websites and mobile apps. I'm passionate about improving the lives of others through design and am continually looking to learn new things every day. Outside of design, I love reading books as well as audiobooks. I write book reviews on my blog and am currently working on an online book club app as my personal project. Currently, I'm based in Vancouver, Canada, but originally hail from the tiny town of Nagasaki, Japan. Resume available upon request.",
    },
    {
      lang: 'ja',
      name: '大川哲加',
      description:
        'UI/UXデザイナー、フロントエンドエンジニア。日本とカナダのテック業界で10年以上のウェブデザイナーとして活躍。ブランディング、アートディレクション、UI/UXデザイン、ウェブサイトやモバイルアプリのフロントエンド開発を担当。グラフィックデザインの経験と知識を活かし、デザインと開発のギャップを埋め、最も美しく、高機能なウェブサイトやモバイルアプリを作成。デザインを通じて他者の生活をより良くすることに情熱を持ち、毎日新しいことを学ぶことを心掛けています。デザイン以外にも、本やオーディオブックを読むことが好きで、ブログで本のレビューを書いています。現在は、個人プロジェクトとしてオンライン読書クラブアプリを開発中。カナダのバンクーバーを拠点にしていますが、出身は日本の長崎です。履歴書はリクエストに応じて提供可能です。',
    },
  ]

  const profile = myIntroduction.find(p => p.lang === language) || myIntroduction[0]

  return (
    <>
      <Layout location={{ pathname: '/about' }} title="About">
        <Seo title="About" />
        <h1>About Me</h1>
        <h2>{profile.name}</h2>
        <p>{profile.description}</p>
      </Layout>
    </>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query MyQuery {
    allWpPost(sort: { date: DESC }) {
      nodes {
        date(formatString: "MMMDD YYYY")
        id
        title
      }
    }
  }
`
