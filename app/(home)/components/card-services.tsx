import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { services } from '@/data/services';
import { MoveRightIcon } from 'lucide-react';
import Link from 'next/link';

const fourServices = services.slice(0, 4);

const ServicesCard = () => {
	return (
		<Card className='md:col-start-4 md:col-end-10 md:row-start-1 md:row-end-5'>
			<CardContent className='justify-between'>
				<CardTitle className='w-full text-start text-lg font-medium'>Serviços Oferecidos</CardTitle>

				<div className='grid w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-2'>
					{fourServices.map(service => {
						const Icon = service.icon;

						return (
							<div
								key={service.name}
								className='flex flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground'>
								<p>{service.name}</p>
								<span className={`-ml-1.5 w-fit rounded-full border p-2 ${service.color}`}>
									<Icon
										size={18}
										className='stroke-1'
									/>
								</span>
							</div>
						);
					})}
				</div>

				<div className='flex w-full items-center justify-between text-muted-foreground'>
					<p className='text-sm'>Todos os serviços</p>
					<Link
						href={'/services'}
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

export default ServicesCard;
