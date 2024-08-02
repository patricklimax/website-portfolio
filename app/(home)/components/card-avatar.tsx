import Avatar from '@/components/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { MessagesSquareIcon, MoveRightIcon } from 'lucide-react';
import Link from 'next/link';

const AvatarCard = () => {
  return (
    <Card className='md:col-start-1 md:col-end-4 md:row-start-3 md:row-end-10'>
      <CardContent className='justify-between'>
        <Avatar/>

        <Link href={'/contact'} className='group/item p-1 text-primary'>
          <MessagesSquareIcon
            className='group/edit group-hover/item:animate-pulse transition-all duration-300 stroke-1'
            size={28} />
        </Link>

        <p className='text-lg font-medium'>
          Meu nome é Patrick
        </p>

        <div className='w-full flex items-center justify-between text-muted-foreground '>
          <p className='text-sm'>
            Biografia
          </p>

          <Link href={'/about'} className='cursor-pointer group/item text-primary'>
            <MoveRightIcon
              size={38}
              className='stroke-1 transition-all duration-500 group/edit group-hover/item:text-foreground group/edit group-hover/item:translate-x-2' />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default AvatarCard;