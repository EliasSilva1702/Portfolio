import { itemsNavbar } from '@/data'
import Link from 'next/link'
import React from 'react'
import { ToggleTheme } from './toggle-theme'

export default function Navbar() {
  return (
    <nav className='fixed z-20 flex flex-col items-center w-full mt-auto justify-center h-max bottom-20'>
      <div className="flex items-center gap-2 justify-center px-4 py-1 dark:bg-white/10 bg-slate-800/10 backdrop-blur-sm rounded-full">
        {itemsNavbar.map((items) => {
          return (
            <div className="cursor-pointer rounded-3xl hover:dark-bg-slate-800 hover:bg-slate-400 px-3 py-2 transition " key={items.id}>
              <Link href={items.link}>{items.icon}</Link>
            </div>
          )
        })}
        <ToggleTheme />
      </div>
    </nav>
  )
}
