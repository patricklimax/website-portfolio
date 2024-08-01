import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { IconVectorBezier } from '@tabler/icons-react';
import { MoveRightIcon } from 'lucide-react';
import Link from 'next/link';

const ServicesCard = () => {
  return (
    <Card className='md:col-start-4 md:col-end-10 md:row-start-1 md:row-end-5'>
      <CardContent className='justify-between'>
        <CardTitle className='text-lg font-medium text-start w-full'>
          Serviços Oferecidos
        </CardTitle>

        <div className='grid grid-cols-2 gap-4 md:gap-2 w-full md:grid-cols-4'>
          <div className='flex flex-col items-center justify-center gap-2 text-sm text-center font-semibold'>
            <p>UI/UX <br/>Design</p>
            <span className='rounded-full border -ml-1.5 w-fit p-2 border-[#9747FF] text-[#9747FF]'>
              <IconVectorBezier size={18} className='stroke-1' />
            </span>
          </div>


          <div className='flex flex-col items-center gap-2 text-sm text-center font-semibold'>
            <p>Digital<br /> Marketing</p>
            <span className='rounded-full border -ml-1.5 w-fit p-2 border-[#CDFF00] text-[#CDFF00]'>
              <IconVectorBezier size={18} className='stroke-1' />
            </span>
          </div>


          <div className='flex flex-col items-center gap-2 text-sm text-center font-semibold'>
            <p>Brand<br /> Identity</p>
            <span className='rounded-full border -ml-1.5 w-fit p-2 border-[#FFCE32] text-[#FFCE32]'>
              <IconVectorBezier size={18} className='stroke-1' />
            </span>
          </div>


          <div className='flex flex-col items-center gap-2 text-sm text-center font-semibold'>
            <p>Web <br />Development</p>
            <span className='rounded-full border -ml-1.5 w-fit p-2 border-[#FF6900] text-[#FF6900]'>
              <IconVectorBezier size={18} className='stroke-1' />
            </span>
          </div>
        </div>

        <div className='w-full flex items-center justify-between text-muted-foreground'>
          <p className='text-sm'>Todos os serviços</p>
          <Link href={'/services'} className='cursor-pointer group/item text-primary'>
            <MoveRightIcon
              size={38}
              className='stroke-1 transition-all duration-500 group/edit group-hover/item:text-foreground group/edit group-hover/item:translate-x-2' />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default ServicesCard;