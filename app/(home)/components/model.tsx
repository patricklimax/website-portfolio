import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { MoveRightIcon } from 'lucide-react';
import Link from 'next/link';

const NameComponent = () => {
	return (
		<Card>
			<CardContent className="flex flex-col items-center justify-between gap-4">
				<CardTitle className="text-lg font-medium text-start w-full">
					Veja meu último trabalho
				</CardTitle>

				<div className="w-full flex items-center justify-between text-muted-foreground">
					<p className="text-sm">Meus Projetos</p>
					<Link href={'/about'} className="cursor-pointer group/item px-4 text-primary">
						<MoveRightIcon
							size={38}
							className="stroke-1 transition-all duration-500 group/edit group-hover/item:text-foreground group/edit group-hover/item:translate-x-2"
						/>
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};

export default NameComponent;
