'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ChangeTheme from './changeTheme';

export default function Navbar() {
  const [active, setActive] = useState(false);

  const navItems = {
    '/': {
      name: 'Home',
    },
    '/conference': {
      name: '2025 Conference',
    },
    '/committee': {
      name: 'Organizing Committee',
    },
    '/past': {
      name: 'Past Conferences',
    },
    '/location': {
      name: 'Location',
    },
  };

  return (
    <nav class='pt-10 py-5 font-bold flex flex-row items-start relative' id='nav'>
      <div className='flex flex-row space-x-0 pr-10'>
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              className='transition-all light:hover:text-orange-800 dark:hover:text-green-200 flex align-middle relative py-1 px-2 m-1'
            >
              {name}
            </Link>
          );
        })}
      </div>
      <div class=''>
        <ChangeTheme />
      </div>
    </nav>
  );
}
