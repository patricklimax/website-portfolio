'use client';

import clsx from 'clsx';
import { BriefcaseBusinessIcon, HomeIcon, LayoutDashboardIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ElementType } from 'react';
import { Button } from './ui/button';
import { SheetClose } from './ui/sheet';

interface LinkNav {
	name: string;
	href: string;
	icon: ElementType;
}

export const links: LinkNav[] = [
	{
		name: 'Home',
		href: '/',
		icon: HomeIcon
	},
	{
		name: 'Sobre',
		href: '/about',
		icon: UserIcon
	},
	{
		name: 'Serviços',
		href: '/services',
		icon: BriefcaseBusinessIcon
	},
	{
		name: 'Projetos',
		href: '/projects',
		icon: LayoutDashboardIcon
	}
];

export const NavBarMobile = () => {
	const pathname = usePathname();
	return (
		<>
			<nav className='flex flex-col gap-4'>
				{links.map(link => {
					const LinkIcon = link.icon;
					return (
						<Link
							className='w-full'
							key={link.name}
							href={link.href}>
							<SheetClose asChild>
								<Button
									variant={'outline'}
									className={clsx(
										'flex w-full items-center justify-start gap-2 border-none font-bold text-foreground',
										{ 'border-primary text-primary': pathname === link.href }
									)}>
									<LinkIcon className='w-4' />
									<p>{link.name}</p>
								</Button>
							</SheetClose>
						</Link>
					);
				})}
			</nav>
		</>
	);
};

export const NavBarDesktop = () => {
	const pathname = usePathname();
	return (
		<>
			<nav className='flex items-center gap-4'>
				{links.map(link => {
					const LinkIcon = link.icon;
					return (
						<Link
							className='w-full'
							key={link.name}
							href={link.href}>
							<Button
								variant={'outline'}
								className={clsx(
									'flex w-full items-center justify-start gap-2 border-none font-bold text-foreground',
									{ 'border-primary text-primary': pathname === link.href }
								)}>
								<LinkIcon className='w-4' />
								<p>{link.name}</p>
							</Button>
						</Link>
					);
				})}
			</nav>
		</>
	);
};
