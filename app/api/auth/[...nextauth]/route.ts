import { authOptions } from "@/app/libs/authOptions";
import NextAuth, { SessionStrategy } from "next-auth";

const handler = NextAuth({
    ...authOptions,
    session: { strategy: "jwt" as SessionStrategy },
});

export { handler as GET, handler as POST };