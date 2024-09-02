'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { SideNavItems } from '@/lib/constants';
import { SideNavItem } from '@/lib/defintion';
import { Icon } from '@iconify/react';
import { ChevronRightIcon } from "@heroicons/react/24/outline";


const SideNav = () => {
  return (
    <div className="md:w-60 bg-white h-screen flex-1 fixed border-r hidden md:flex">
      <div className="flex flex-col space-y-6 w-full ">
        <Link
          href="/"
          className="flex flex-row space-x-3 mt-2 items-center justify-center md:justify-start md:px-6  h-16 w-full"
        >
          <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
          <span className="font-semibold text-xl hidden md:flex">GreenNexus</span>
        </Link>

        <div className="flex flex-col space-y-2  md:px-4">
          {SideNavItems.map((item, idx) => {
            return <MenuItem key={idx} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div className=" ">
      {item.subMenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg w-full justify-between hover:bg-BgDarkGreen 
              ${pathname.includes(item.path) ? 'bg-BgDarkGreen' : ''} ${subMenuOpen ? 'bg-BgDarkGreen opacity-80':''}`}
          >
            <div className="flex flex-row space-x-4 items-center">
              <span className="text-base  flex">{item.title}</span>
            </div>

            <div className={`${subMenuOpen ? 'rotate-90' : ''} flex`}>
              <ChevronRightIcon className='w-4 h-4 text-black'/>
            </div>
          </button>

          {subMenuOpen && (
            <div className=" flex flex-col gap-1 my-2">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${
                      subItem.path === pathname ? 'font-bold' : ''
                    } hover:bg-BgDarkGreen pl-4 py-1.5 rounded-lg`}
                  >
                    <span className=''>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          href={item.path}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-BgDarkGreen ${
            item.path === pathname ? 'bg-zinc-100' : ''
          }`}
        >
          <span className=" text-base flex">{item.title}</span>
        </Link>
      )}
    </div>
  );
};