import React from 'react'
import Nav from './_components/Nav';

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className='flex flex-col min-h-screen min-w-full bg-background max-h-screen'>
            <Nav />
        <main className='flex w-full flex-grow'>
           { children } 
      </main>         
        </div>
    )
  }
  