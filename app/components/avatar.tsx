import Image from 'next/image';

const Avatar = () => {
  return ( 
    <div className='border relative w-fit my-2'>
      <div className='w-2.5 h-2.5 bg-primary absolute -left-[5px] -top-[5px]'></div>
      <div className='w-2.5 h-2.5 bg-primary absolute -right-[5px] -top-[5px]'></div>
      <div className='w-2.5 h-2.5 bg-primary absolute -right-[5px] -bottom-[5px]'></div>
      <div className='w-2.5 h-2.5 bg-primary absolute -left-[5px] -bottom-[5px]'></div>
      <Image
        className='bg-primary-foreground rounded-full'
        src={"avatar.svg"}
        alt='Logo Developer'
        width={188}
        height={188} />
    </div>
   );
}
 
export default Avatar;