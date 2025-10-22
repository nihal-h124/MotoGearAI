import { SignedIn } from '@clerk/nextjs';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button';
import { Bookmark, Motorbike } from 'lucide-react';
// import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

const Header = async ({ isAdminPage= true }) => {
  const isAdmin = false; // Replace with actual admin check logic

  return (
    <header className='fixed w-full top-0 bg-white/75 backdrop-blur-md border-b z-50'>
      <nav className='mx-auto px-5 py-5 flex items-center justify-between'>
        <Link href={isAdminPage ? "/admin" : "/"}>
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
          <SignedIn>
            <Link href='/saved-bikes'>
              <Button variant={'outline'}>
                <Bookmark size={20} />
                  <span className='hidden md:inline'>Bookings</span>  
              </Button>
            </Link>

            <Link href='/saved-bikes'>
              <Button>
                <Motorbike size={20} />
                  <span className='hidden md:inline'>Saved Bikes</span>  
              </Button>
            </Link>            
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header
