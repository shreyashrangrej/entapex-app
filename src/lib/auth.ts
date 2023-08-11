import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
// import EmailProvider from "next-auth/providers/email";

import { env } from "@/env.mjs";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
};
