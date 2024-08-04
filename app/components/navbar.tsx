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
    name: "Home",
    href: "/",
    icon: HomeIcon
  },
  {
    name: "Sobre",
    href: "/about",
    icon: UserIcon
  },
  {
    name: "Serviços",
    href: "/services",
    icon: BriefcaseBusinessIcon
  },
  {
    name: "Projetos",
    href: "/projects",
    icon: LayoutDashboardIcon
  },
];


export const NavBarMobile = () => {
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

export const NavBarDesktop = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className='flex items-center gap-4'>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              className='w-full'
              key={link.name}
              href={link.href}>
                <Button variant={'outline'}
                  className={
                    clsx(
                      'w-full border-none flex gap-2 items-center justify-start font-bold text-foreground',
                      { 'text-primary border-primary': pathname === link.href }
                    )}>
                  <LinkIcon className="w-4" />
                  <p>{link.name}</p>
                </Button>
            </Link>
          );
        })}
      </nav></>
  );
}
