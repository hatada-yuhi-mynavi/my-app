import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "EmailAndPassword",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials === undefined) return Promise.resolve(null);

        // -----本来は認証API叩く-----
        if (
          credentials.email !== "user@mynavi.jp" ||
          credentials.password !== "P@ssw0rd"
        )
          return Promise.resolve(null);

        const user: User = {
          id: "1",
          email: "user@mynavi.jp",
          name: "test user",
        };
        // ------------------------

        return Promise.resolve(user);
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      session.user = {
        email: token.email,
        name: token.name,
      };
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
};
