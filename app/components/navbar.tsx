'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Button } from './ui/button';
import { ElementType } from 'react';
import { BriefcaseBusinessIcon, HomeIcon, LayoutDashboardIcon, UserIcon } from 'lucide-react';
import { SheetClose } from './ui/sheet';

interface LinkNav {
  name: string;
  href: string;
  icon: ElementType
}

export const links: LinkNav[] = [
  {
    name: ".home",
    href: "/",
    icon: HomeIcon
  },
  {
    name: ".sobre",
    href: "/about",
    icon: UserIcon
  },
  {
    name: ".serviços",
    href: "/services",
    icon: BriefcaseBusinessIcon
  },
  {
    name: ".projetos",
    href: "/projects",
    icon: LayoutDashboardIcon
  },
];


const NavBar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className='flex flex-col gap-4 '>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              className='w-full'
              key={link.name}
              href={link.href}>
              <SheetClose asChild>
                <Button variant={'outline'}
                  className={
                    clsx(
                      'w-full border-none flex gap-2 items-center justify-start font-bold text-foreground',
                      { 'text-primary border-primary': pathname === link.href }
                    )}>
                  <LinkIcon className="w-4" />
                  <p>{link.name}</p>
                </Button>
              </SheetClose>
            </Link>
          );
        })}
      </nav></>
  );
}

export default NavBar;