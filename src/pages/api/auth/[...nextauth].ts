import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { clientPromise } from '../../../database/mongodb';

export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET || 'd4a1f58a-d377-46db-8de5-4ca9ad1c2304',
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async session({ session, user }) {
      console.log(user), (session.user.id = user.id);
      return Promise.resolve(session);
    },
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};
export default NextAuth(authOptions);
