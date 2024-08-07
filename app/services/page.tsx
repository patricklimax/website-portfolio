import ContactCard from '@/components/contact';
import { ExperienceItem, experiences } from '@/components/experience';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { services } from '@/data/services';
import { MoveLeftIcon } from 'lucide-react';
import Link from 'next/link';

const ServicesPage = () => {
	return (
		<section className="mx-auto max-w-5xl">
			<Link href={'/'} className="flex mb-8">
				<Button className="bg-primary hover:bg-primary/85 ">
					<MoveLeftIcon />
					<span className="ml-2 text-base font-bold">Home</span>
				</Button>
			</Link>

			<div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
				{services.map((service) => {
					const ServiceIcon = service.icon;
					const ColorIcon = service.color;
					return (
						<Card key={service.name}>
							<CardContent>
								<div className="w-full flex items-center gap-4">
									<CardTitle className="flex-3 text-lg font-medium text-center w-full flex flex-col text-primary">
										{service.name}
									</CardTitle>

									<div className="flex-1 flex items-center justify-center">
										<span
											className={`rounded-full border place-items-start w-fit p-4 ${ColorIcon}`}>
											<ServiceIcon size={35} className="stroke-1" />
										</span>
									</div>
								</div>

								<div className="text-sm font-light flex flex-col items-center gap-2">
									<p className="">{service.description}</p>
									<p className="text-muted-foreground">{service.moreInfo}</p>
								</div>
							</CardContent>
						</Card>
					);
				})}

				<div>
					<Card className="h-full">
						<CardContent className="grid grid-cols-2 md:grid-cols-4 ">
							{experiences.map((experience) => (
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
