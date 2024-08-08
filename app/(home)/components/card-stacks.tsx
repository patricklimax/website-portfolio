import Marquee from '@/components/magicui/marquee';
import { Card, CardContent } from '@/components/ui/card';
import { CodeXmlIcon } from 'lucide-react';

const stacks = ['Tailwind', 'React', 'NextJS', 'NodeJS', 'Express', 'Prisma', 'PostgreSQL'];

const StacksCard = () => {
	return (
		<Card className='md:col-start-10 md:col-end-13 md:row-start-1 md:row-end-2'>
			<CardContent className='flex-row overflow-x-auto p-4 [&::-webkit-scrollbar]:hidden'>
				<Marquee
					pauseOnHover
					className='[--duration:20s]'>
					{stacks.map(stack => (
						<div
							key={stack}
							className='flex items-center gap-1 text-xs'>
							{stack}
							<CodeXmlIcon
								size={16}
								className='text-muted-foreground'
							/>
						</div>
					))}
				</Marquee>
			</CardContent>
		</Card>
	);
};

export default StacksCard;
