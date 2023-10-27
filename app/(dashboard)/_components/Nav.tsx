import ThemeSwitcher from '@/components/ThemeSwitcher';
import React from 'react'
import Logo from './Logo';
import { UserButton } from '@clerk/nextjs';

type Props = {}

const Nav = (props: Props) => {
  return (
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
        <Logo />
          <div className="flex gap-4 items-center">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
    </nav>
  )
}

export default Nav