import { Card, CardContent } from '@/components/ui/card';

const TitleDeveloper = () => {
	return (
		<Card className="md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-3">
			<CardContent className="gap-0">
				<p className="text-3xl text-primary md:text-xl font-bold md:leading-relaxed">
					Desenvolvedor
				</p>

				<p className="font-medium md:text-sm text-muted-foreground">
					Apaixonado por front-end
				</p>
			</CardContent>
		</Card>
	);
};

export default TitleDeveloper;
