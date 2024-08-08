import { Card, CardContent } from '@/components/ui/card';
import { MoveRightIcon } from 'lucide-react';
import Link from 'next/link';

const NameComponent = () => {
	return (
		<Card>
			<CardContent className='flex flex-col items-center justify-between gap-4'>
				<div className='flex w-full items-center justify-between text-muted-foreground'>
					<p className='text-sm'>Meus Projetos</p>
					<Link
						href={'/about'}
						className='group/item cursor-pointer px-4 text-primary'>
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

export default NameComponent;
