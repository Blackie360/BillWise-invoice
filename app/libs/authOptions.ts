import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "./db";
import { compare } from "bcrypt";

const authOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
          // Check if user credentials are Correct
          if (!credentials?.email || !credentials?.password) {
            return null;
          }
          //Check if user exists
          const existingUser = await db.user.findUnique({
            where: { email: credentials.email },
          });
          if (!existingUser) {
            return;
          }
          //Check if Password is correct
          const passwordMatch = await compare(
            credentials.password,
            existingUser.password
          );
          if (!passwordMatch) {
            return null;
          }
          const user= {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
          };
          console.log(user);
          return user;
      },
    }),
  ],
};

export { authOptions };