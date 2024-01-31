import CredentialsProvider from "next-auth/providers/credentials";
import { randomUUID, randomBytes } from "crypto";
import { VerifyUser, fetchUserFromDatabase } from "@/app/database/dynamo_conn.mjs";

export const authOptions = {
  /* providers */
  providers: [
    // ユーザ用認証
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials, req) {
        let user = await VerifyUser(credentials?.email, credentials?.password);
        if (user) {
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
        }
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      },
    }),
  ],

  pages: {
    signIn: "/auth/signIn",
    // error: "/auth/error",
    // signPut: "/auth/signout",
  },

  /* callbacks */
  callbacks: {
    async jwt({ token, user, session }) {
      console.log("jwt callback", { token, user, session });
      if (user) {
        // console.log({token});
        // console.log(token,'token')
        // const userData = await fetchUserFromDatabase(user.id,user.address);
        return {
          ...token,
          id: user.id,
          lastName: user.lastName,
          firstName: user.firstName,
          nickName: user.nickName,
          email: user.mail_address,
        };
        // return {
        //   ...token,
        //   id: userData.id,
        //   lastName: userData.lastName,
        //   firstName: userData.firstName,
        //   nickName: userData.nickName,
        //   email: userData.mail_address,
        // };
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log("session callback", { session, token, user });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          lastName: token.lastName,
          firstName: token.firstName,
          nickName: token.nickName,
          email: token.email,
        },
      };
    },
  },

  /* secret */
  secret: process.env.NEXTAUTH_SECRET,

  /* jwt */
  jwt: {
    maxAge: 3 * 24 * 60 * 60, // 3 days
  },

  /* session */
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex");
    },
  },
};
