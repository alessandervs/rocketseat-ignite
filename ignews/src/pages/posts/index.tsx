import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import * as prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

import styles from './styles.module.scss'

type Post = {
  slug: string,
  title: string,
  excerpt: string,
  updatedAt: string,
}

interface PostProps {
  posts: Post[]

}

export default function Posts({ posts }: PostProps) {

  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => (
            <a key={post.slug} href='#'>
              <time> {post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </a>

          ))}

        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {

  const prismic = getPrismicClient({ previewData })

  const response = await prismic.getByType('post', {
    pageSize: 100
  })

  console.log(JSON.stringify(response, null, 2))

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: post.data?.title,
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })

    };
  })
  return {
    props: { posts }
  }

}