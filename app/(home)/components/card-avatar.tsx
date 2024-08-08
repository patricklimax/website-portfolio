import Avatar from '@/components/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { MessagesSquareIcon, MoveRightIcon } from 'lucide-react';
import Link from 'next/link';

const AvatarCard = () => {
	return (
		<Card className='md:col-start-1 md:col-end-4 md:row-start-3 md:row-end-10'>
			<CardContent className='justify-between'>
				<Avatar />

				<Link
					href={'/contact'}
					className='group/item p-1 text-primary'>
					<MessagesSquareIcon
						className='group/edit stroke-1 transition-all duration-300 group-hover/item:animate-pulse'
						size={28}
					/>
				</Link>

				<p className='text-lg font-medium'>Meu nome é Patrick</p>

				<div className='flex w-full items-center justify-between text-muted-foreground'>
					<p className='text-sm'>Biografia</p>

					<Link
						href={'/about'}
						className='group/item cursor-pointer text-primary'>
						<MoveRightIcon
							size={38}
							className='group/edit group/edit stroke-1 transition-all duration-500 group-hover/item:translate-x-2 group-hover/item:text-foreground'
						/>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};

export default AvatarCard;
