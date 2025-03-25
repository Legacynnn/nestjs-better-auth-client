import {
  createAuthClient
} from "better-auth/react";


export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL + "/api/auth",
})

export const {
  signIn,
  signOut,
  signUp,
  useSession
} = authClient;