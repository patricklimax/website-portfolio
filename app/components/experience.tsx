import { Card, CardContent } from '@/components/ui/card';

interface ExperienceProps {
  quantity: number;
  description: string;
}

const experiences: ExperienceProps[] = [
  {
    quantity: 3,
    description: 'Anos de Experiência'
  },
  {
    quantity: 22,
    description: 'Total de Projetos Finalizados'
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

const ExperienceItem = ({quantity, description}: ExperienceProps) => {
  return (
    <div className='text-center'>
      <p className='text-5xl text-primary md:text-4xl lg:text-5xl font-bold'>
        {quantity}
      </p>
      <p>{description}</p>
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