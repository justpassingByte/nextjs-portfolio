"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { attachment, navBarLink } from '@/data/portfolio';
import { SunIcon, MoonIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';


const Navbar = () => {
  const [active, setActive] = useState<string>('');
  const { theme, setTheme } = useTheme();

  return (
    <div className='flex justify-between text-gray-600  dark:text-gray-400 animate__animated animate__fadeIn animate__delay-2s'>
    <div className='flex w-[70%] lg:w-[60%] justify-end mt-4'>
        <ul className='flex flex-wrap gap-3 md:gap-8 items-center dark:bg-[#25252E] border rounded-lg  border-gray-400 dark:border-gray-700 px-2 lg:px-8 h-12 lg:h-16'>
            {navBarLink?.map((navBar,index)=> <li className='dark:hover:text-white hover:text-gray-400' onClick={()=>setActive(navBar?.title)} style={active === navBar?.title ?{
                color:theme=="dark"?'white':'black'
            }:{}} key={navBar.title+index}>
                <Link href={navBar.href}>{navBar.title}</Link>
            </li>)}
            
        </ul>
      </div>

      {/* Right section with icons and attachment link */}
      <div className='flex gap-8 items-center'>
        {theme === 'dark' ? (
          <SunIcon
            onClick={() => setTheme('light')}
            className='h-6 w-6 text-white cursor-pointer'
          />
        ) : (
          <MoonIcon
            onClick={() => setTheme('dark')}
            className='h-6 w-6 text-black cursor-pointer'
          />
        )}

        <div className='flex items-center text-gray-400'>
          <Link className='flex items-center' href={attachment.href}>
            {attachment?.title}
            <ArrowDownTrayIcon className='h-6 w-6 ml-1' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
