// pages/[uid].js

import { GetStaticPaths, GetStaticProps } from 'next'
import { createClient } from '../../../prismicio'

export default function Post({ post }) {
  return <h1>{post.uid}</h1>
}




export const getStaticProps: GetStaticProps = async ({ params, previewData }) => {
  const uid = params
  const client = createClient({ previewData })

  const post = await client.getByUID("posts", uid)

  return {
    props: { post },
  }
}

export const getStaticPaths: GetStaticPaths = async (params) => {


  return {
    paths: [
      "posts",
    ],
    fallback: true,
  }
}