import { GetStaticProps } from 'next'
import Head from 'next/head'
import { SunscribeButton } from '../components/SunscrieButton'
import { stripe } from '../services/stripe'

import styles from './home.module.scss'



interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({ product }: HomeProps) {



  return (
    <>
      <Head>
        <title>IG | News</title>
      </Head>


      <main className={styles.contentContainer}>
        <section className={styles.hero}>

          <span>👏 Hey, welcome!</span>

          <h1>News about the <span>React</span> world.</h1>

          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SunscribeButton priceId={product.priceId} />
        </section>

        <img src='/images/avatar.svg' alt='Girl coding' />

      </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  /* Todo código dentro dessa função executa no lado do servidor*/
  const price = await stripe.prices.retrieve('price_1LFoEHHm2hrwMrl4yto1QFj4', {
    expand: ['product'] //<<para exibir dados do produto
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),

  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, //24horas
  }
}