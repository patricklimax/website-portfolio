import Marquee from '@/components/magicui/marquee';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import {
	IconBrandCss3,
	IconBrandGit,
	IconBrandGithub,
	IconBrandHtml5,
	IconBrandJavascript,
	IconBrandNextjs,
	IconBrandNodejs,
	IconBrandNpm,
	IconBrandPrisma,
	IconBrandReact,
	IconBrandSupabase,
	IconBrandTailwind,
	IconBrandTypescript,
	IconBrandVercel,
	IconBrandVite,
	IconBrandVscode,
	IconDatabasePlus
} from '@tabler/icons-react';
import type { ElementType } from 'react';

interface Props {
	icon: ElementType;
}

const ToolsCard = () => {
	return (
		<div className='flex w-full items-center gap-2 overflow-x-auto py-1 text-xs [&::-webkit-scrollbar]:hidden'>
			<Marquee
				pauseOnHover
				className='[--duration:40s]'>
				<Badge variant={'outline'}>Figma</Badge>
				<Badge variant={'outline'}>UXdesign</Badge>
				<Badge variant={'outline'}>UIdesign</Badge>
				<Badge variant={'outline'}>Interativo</Badge>
				<Badge variant={'outline'}>Proativo</Badge>
			</Marquee>
		</div>
	);
};

const TechCard = ({ icon: Icon }: Props) => {
	return (
		<Badge
			variant={'outline'}
			className='flex items-center justify-center p-1 text-primary'>
			<Icon
				size={22}
				stroke={1}
			/>
		</Badge>
	);
};

const Technologies = () => {
	return (
		<div className='flex w-full items-center gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
			<Marquee
				reverse
				pauseOnHover
				className='[--duration:40s]'>
				<TechCard icon={IconBrandHtml5} />
				<TechCard icon={IconBrandCss3} />
				<TechCard icon={IconBrandTailwind} />
				<TechCard icon={IconBrandJavascript} />
				<TechCard icon={IconBrandTypescript} />
				<TechCard icon={IconBrandReact} />
				<TechCard icon={IconBrandNextjs} />
				<TechCard icon={IconBrandGit} />
				<TechCard icon={IconBrandGithub} />
				<TechCard icon={IconBrandVite} />
				<TechCard icon={IconBrandVercel} />
				<TechCard icon={IconBrandSupabase} />
				<TechCard icon={IconBrandPrisma} />
				<TechCard icon={IconBrandNodejs} />
				<TechCard icon={IconBrandNpm} />
				<TechCard icon={IconBrandVscode} />
				<TechCard icon={IconDatabasePlus} />
				{/* express axios postgress */}
			</Marquee>
		</div>
	);
};

const TechToolsCard = () => {
	return (
		<Card className='md:col-start-1 md:col-end-7 md:row-start-10 md:row-end-13'>
			<CardContent className='gap-2'>
				<CardTitle className='w-full text-start text-lg font-medium'>
					Tecnologias e Ferramentas
				</CardTitle>
				<div className='flex w-full flex-col gap-2'>
					<ToolsCard />
					<Technologies />
				</div>
			</CardContent>
		</Card>
	);
};

export default TechToolsCard;
