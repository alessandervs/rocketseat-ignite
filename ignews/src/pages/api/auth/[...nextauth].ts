import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";

import { query as q } from 'faunadb'
import { fauna } from '../../../services/fauna'



export default NextAuth({
  // Configure one or more authentication providers

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,

    }),
  ],
  callbacks: {
    async session({ session: user, session, token }) {

      try {
        const userActiveSubscription = await fauna.query(
          q.Get(
            q.Intersection([
              q.Match(
                q.Index('subscription_by_user_ref'),
                q.Select(
                  "ref",
                  q.Get(
                    q.Match(
                      q.Index('user_by_email'),
                      q.Casefold(session.user.email)
                    )
                  )
                )
              ),
              q.Match(
                q.Index('subscription_by_status'),
                "active"
              )
            ])
          )
        )

        let date = new Date(Date.now() + 1 * (60 * 60 * 1000)); //acrescenta 1 dia (para acrecentar hora, retirar " + 1 ")

        return {
          ...session,
          activeSubscription: userActiveSubscription,
          expires: String(date)
        }

      } catch {

        return {
          ...session,
          activeSubscription: null
        }
      }

    },

    async signIn({ user, account, profile }) {
      const { email } = user

      try {

        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(user.email)
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              { data: { email } }
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(user.email)
              )
            )
          )
        )
        return true

      } catch {

        return false
      }


    },
  }

})

