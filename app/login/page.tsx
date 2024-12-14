import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
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
        <CardContent>
            <form className='flex flex-col gap-y-4'>
                <div className='flex flex-col gap-y-2'>
                    <Label>Email</Label>
                    <input type="email" placeholder='hello@gmail.com' className='input' />
                </div>
                <Button>Submit</Button>
            </form>
        </CardContent>
    </Card>

  </div>
  </>
  )
}

export default Login
