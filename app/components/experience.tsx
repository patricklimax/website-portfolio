import { Card, CardContent } from '@/components/ui/card';
import NumberTicker from './magicui/number-ticker';

interface ExperienceProps {
  quantity: number;
  description: string;
}

export const experiences: ExperienceProps[] = [
  {
    quantity: 2,
    description: 'Anos de Experiência'
  },
  {
    quantity: 22,
    description: 'Projetos Construídos'
  },
  {
    quantity: 8,
    description: 'Clientes pelo mundo'
  },
  {
    quantity: 0,
    description: 'Clientes Insatisfeitos'
  },
]

export const ExperienceItem = ({quantity, description}: ExperienceProps) => {
  return (
    <div className='text-center'>
      <p className='text-5xl md:text-4xl lg:text-5xl font-bold text-primary'>
        <NumberTicker value={quantity > 1 ? quantity : 0.1} />
      </p>
      <p className='text-muted-foreground'>{description}</p>
    </div>
  )
}

const ExperienceCard = () => {
  return (
    <Card className='h-full'>
      <CardContent
        className='grid grid-cols-2 md:grid-cols-1 md:place-content-between'>
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.description}
            quantity={experience.quantity}
            description={experience.description} />
          ))}
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;