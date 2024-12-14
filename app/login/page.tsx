import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const Login = () => {
  return (
  <>
  <div className="flex h-screen w-full items-center justify-center px-4">
    <Card className='max-w-sm'>
        <CardHeader>
            <CardTitle className='text-2xl'>Login</CardTitle>
            <CardDescription>
                Enter your email below to login in to your account
            </CardDescription>
        </CardHeader>
        
    </Card>

  </div>
  </>
  )
}

export default Login
