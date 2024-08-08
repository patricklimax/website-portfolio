import { Card, CardContent, CardTitle } from '@/components/ui/card';
import {
	IconBrandGithub,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandWhatsapp
} from '@tabler/icons-react';
import { MoveLeftIcon } from 'lucide-react';
import Link from 'next/link';
import type { ElementType } from 'react';

interface ContactItemProps {
	name: string;
	href: string;
	icon: ElementType;
}

const contacts: ContactItemProps[] = [
	{
		name: 'linkedin',
		href: 'https://www.linkedin.com/in/patricklimax/',
		icon: IconBrandLinkedin
	},
	{
		name: 'github',
		href: 'https://github.com/patricklimax',
		icon: IconBrandGithub
	},
	{
		name: 'instagram',
		href: 'https://www.instagram.com/patricklimax/',
		icon: IconBrandInstagram
	},
	{
		name: 'whatsapp',
		href: 'https://wa.me/5598983342518',
		icon: IconBrandWhatsapp
	}
];

const ContactItem = ({ name, href, icon: Icon }: ContactItemProps) => {
	return (
		<Link
			className='group/item rounded-md border p-1 hover:border-transparent'
			key={name}
			href={href}>
			<Icon
				size='28'
				className='group/edit stroke-1 text-primary transition-all duration-200 group-hover/item:scale-150'
			/>
		</Link>
	);
};

const ContactCard = () => {
	return (
		<Card className='h-full'>
			<CardContent className='justify-between gap-0'>
				<CardTitle className='w-full text-start text-lg font-medium'>Fale comigo</CardTitle>

				<div className='mt-3 flex items-center justify-between gap-4'>
					{contacts.map(contact => (
						<ContactItem
							key={contact.name}
							href={contact.href}
							name={contact.name}
							icon={contact.icon}
						/>
					))}
				</div>

				<div className='group/item flex w-full items-center justify-between text-muted-foreground'>
					<p className='text-sm'>Fale comigo clicando nos ícones acima</p>
					<span className='text-primary'>
						<MoveLeftIcon
							size={38}
							className='group/edit group/edit rotate-45 stroke-1 transition-all duration-500 group-hover/item:-translate-x-6 group-hover/item:text-foreground'
						/>
					</span>
				</div>
			</CardContent>
		</Card>
	);
};

export default ContactCard;
