import { LoginForm } from '@/components/auth/LoginForm'
import React from 'react'

export const Login:React.FC = () => {
  return (
    <main className='w-full h-screen flex flex-col justify-center items-center'>
      <div>
        <h2 className='font-bold text-brand-primary text-2xl'>Resibo Pilipinas</h2>
        <p className='text-center font-secondary text-sm'>Electronic Invoicing</p>
      </div>
      <div className='mt-5 w-sm'>
        <LoginForm />
      </div>
    </main>
  )
}
