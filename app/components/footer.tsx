import { Separator } from './ui/separator';

const Footer = () => {
	return (
		<footer className='mx-auto my-8 flex max-w-5xl flex-col gap-8 shadow-sm'>
			<Separator />
			<p className='text-center text-xs'>
				Criado por <span className='font-bold text-primary'>Patrick Lima</span>
			</p>
		</footer>
	);
};

export default Footer;
