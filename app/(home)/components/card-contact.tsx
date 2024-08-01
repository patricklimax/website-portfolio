import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp } from '@tabler/icons-react';
import { MoveRightIcon } from 'lucide-react';
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
  {
    name: 'whatsapp1',
    href: 'https://www.instagram.com/patricklimax/',
    icon: IconBrandInstagram
  },
  {
    name: 'whatsapp2',
    href: 'https://wa.me/5598983342518',
    icon: IconBrandWhatsapp
  }
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
    <Card className='md:col-start-7 md:col-end-13 md:row-start-10 md:row-end-13'>
      <CardContent className='justify-between gap-3'>
        <CardTitle className='text-lg font-medium text-start w-full'>
          Fale comigo
        </CardTitle>

        <div className='flex items-center justify-between gap-4'>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.name}
              href={contact.href}
              name={contact.name}
              icon={contact.icon} />
          ))}
        </div>

        <div className='w-full flex items-center justify-between text-muted-foreground '>
          <p className='text-sm'>Fale comigo</p>
          <Link href={'/projects'} className='cursor-pointer group/item text-primary'>
            <MoveRightIcon
              size={38}
              className='stroke-1 transition-all duration-500 group/edit group-hover/item:text-foreground group/edit group-hover/item:translate-x-2' />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default ContactCard;