import ContactCard from '@/components/contact';
import { ExperienceItem, experiences } from '@/components/experience';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { services } from '@/data/services';
import { MoveLeftIcon } from 'lucide-react';
import Link from 'next/link';

const ServicesPage = () => {
	return (
		<section className='mx-auto max-w-5xl'>
			<Link
				href={'/'}
				className='mb-8 flex'>
				<Button className='bg-primary hover:bg-primary/85'>
					<MoveLeftIcon />
					<span className='ml-2 text-base font-bold'>Home</span>
				</Button>
			</Link>

			<div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
				{services.map(service => {
					const ServiceIcon = service.icon;
					const ColorIcon = service.color;
					return (
						<Card key={service.name}>
							<CardContent>
								<div className='flex w-full items-center gap-4'>
									<CardTitle className='flex-3 flex w-full flex-col text-center text-lg font-medium text-primary'>
										{service.name}
									</CardTitle>

									<div className='flex flex-1 items-center justify-center'>
										<span
											className={`w-fit place-items-start rounded-full border p-4 ${ColorIcon}`}>
											<ServiceIcon
												size={35}
												className='stroke-1'
											/>
										</span>
									</div>
								</div>

								<div className='flex flex-col items-center gap-2 text-sm font-light'>
									<p className=''>{service.description}</p>
									<p className='text-muted-foreground'>{service.moreInfo}</p>
								</div>
							</CardContent>
						</Card>
					);
				})}

				<div>
					<Card className='h-full'>
						<CardContent className='grid grid-cols-2 md:grid-cols-4'>
							{experiences.map(experience => (
								<ExperienceItem
									key={experience.description}
									quantity={experience.quantity}
									description={experience.description}
								/>
							))}
						</CardContent>
					</Card>
				</div>

				<div>
					<ContactCard />
				</div>
			</div>
		</section>
	);
};

export default ServicesPage;
