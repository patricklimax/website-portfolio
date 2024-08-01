import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { CodeXmlIcon } from 'lucide-react';

const stacks= [
  'Tailwind', 'React', 'NextJS', 'NodeJS', 'Express', 'Prisma', 'PostgreSQL'
]

const StacksCard = () => {
  return (
    <Card className='md:col-start-10 md:col-end-13 md:row-start-1 md:row-end-2'>
      <CardContent className='flex-row p-4 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
        {stacks.map(stack => (
          <div key={stack} className='flex gap-1 text-xs items-center'>
            { stack }
            <CodeXmlIcon size={16} className='text-muted-foreground'/>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default StacksCard;