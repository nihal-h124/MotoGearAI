import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button';
import { ArrowBigLeft, Bookmark, Layout, Motorbike, PersonStanding } from 'lucide-react';
// import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

const Header = async ({ isAdminPage = false }) => {
  const isAdmin = false;

  return (
    <header className='fixed w-full top-0 bg-white/75 backdrop-blur-md border-b z-50'>
      <nav className='mx-auto px-5 py-5 flex items-center justify-between'>
        <Link href={isAdminPage ? "/admin" : "/"} className='flex'>
          <Image 
            src="/logo.png" 
            alt="Logo"  
            width={150} 
            height={70} 
            className='h-16 w-auto object-contain' 
            />
          {isAdmin && (
            <span className="text-sm font-semibold text-red-600">admin</span>
          )}
        </Link>

        <div className='flex items-center gap-4'>
          {isAdminPage ? ( 
           <Link href='/back'>
                <Button variant={'outline'} className="flex items-center gap-3">
                  <ArrowBigLeft size={20} />
                  <span>Go Back</span>
                </Button>
              </Link> 
          ) : (
          <SignedIn>
            {!isAdmin ? (
            <Link href='/bookings'>
              <Button variant={'outline'}>
                <Bookmark size={20} />
                  <span className='hidden md:inline'>Bookings</span>  
              </Button>
            </Link>
            ) : (
              <Link href='/admin'>
                <Button variant={'outline'}>
                  <PersonStanding size={20} />
                  <span className='hidden md:inline'>Admin Login</span>
                </Button>
              </Link>
            )}

            <Link href='/saved-bikes'>
              <Button>
                <Motorbike size={20} />
                  <span className='hidden md:inline'>Saved Bikes</span>  
              </Button>
            </Link>         
          </SignedIn>
          )}

          <SignedOut>
            <SignInButton>
              <Button variant='ghost'>Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-12 h-12 rounded-full',
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header
