import Image from 'next/image';

const Avatar = () => {
	return (
		<div className='relative my-2 w-fit border'>
			<div className='absolute -left-[5px] -top-[5px] h-2.5 w-2.5 bg-primary' />
			<div className='absolute -right-[5px] -top-[5px] h-2.5 w-2.5 bg-primary' />
			<div className='absolute -bottom-[5px] -right-[5px] h-2.5 w-2.5 bg-primary' />
			<div className='absolute -bottom-[5px] -left-[5px] h-2.5 w-2.5 bg-primary' />
			<Image
				className='rounded-full bg-primary-foreground'
				src={'avatar.svg'}
				alt='Logo Developer'
				width={188}
				height={188}
			/>
		</div>
	);
};

export default Avatar;
