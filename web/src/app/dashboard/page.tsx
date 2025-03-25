'use client'

import { authClient } from '@/lib/auth-client'
import React from 'react'

export default function page() {
  const { 
    data: session, 
} = authClient.useSession() 

  console.log(session?.user.email)

  return (
    <div>page</div>
  )
}
