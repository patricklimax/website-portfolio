import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp } from '@tabler/icons-react';
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react';
import Link from 'next/link';
import { ElementType } from 'react';


interface ContactItemProps {
  name: string,
  href: string,
  icon: ElementType
}

const contacts: ContactItemProps[] = [
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/patricklimax/',
    icon: IconBrandLinkedin
  },
  {
    name: 'github',
    href: 'https://github.com/patricklimax',
    icon: IconBrandGithub
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/patricklimax/',
    icon: IconBrandInstagram
  },
  {
    name: 'whatsapp',
    href: 'https://wa.me/5598983342518',
    icon: IconBrandWhatsapp
  },
]


const ContactItem = ({ name, href, icon: Icon }: ContactItemProps) => {
  return (
    <Link
      className='group/item p-1 border rounded-md hover:border-transparent'
      key={name}
      href={href}>

      <Icon size="28"
        className="group/edit group-hover/item:scale-150 stroke-1 text-primary transition-all duration-200" />
    </Link>
  )
}

const ContactCard = () => {
  return (
    <Card className='h-full'>
      <CardContent className='justify-between gap-0'>
        <CardTitle className='text-lg font-medium text-start w-full'>
          Fale comigo
        </CardTitle>

        <div className='flex items-center justify-between gap-4 mt-3'>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.name}
              href={contact.href}
              name={contact.name}
              icon={contact.icon} />
          ))}
        </div>

        <div className='w-full flex items-center justify-between text-muted-foreground group/item'>
          <p className='text-sm'>Fale comigo clicando nos ícones acima</p>
          <span className='text-primary'>
            <MoveLeftIcon
              size={38}
              className='stroke-1 rotate-45 transition-all duration-500 group/edit group-hover/item:text-foreground group/edit group-hover/item:-translate-x-6' />
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default ContactCard;