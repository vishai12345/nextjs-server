import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head';

const Post = props => (
  <Layout>
    <Head>
      <title>{props.show.name}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  return { show }
}

export default Post