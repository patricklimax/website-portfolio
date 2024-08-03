import Avatar from '@/components/avatar';
import ContactCard from '@/components/contact';
import { ExperienceItem, experiences } from '@/components/experience';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ChevronsRightIcon, MoveLeftIcon } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <section className='mx-auto max-w-5xl'>
      <Link href={'/'} className='flex mb-8'>
        <Button className='bg-primary hover:bg-primary/85 '>
          <MoveLeftIcon />
          <span className='ml-2 text-base font-bold'>Home</span>
        </Button>
      </Link>

      <div className='w-full grid grid-cols-1 gap-4 md:grid md:grid-cols-12 md:grid-rows-12 md:h-[696px]'>
        <Card className='md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-5'>
          <CardContent className='justify-center p-0'>
            <Avatar />
          </CardContent>
        </Card>

        <Card className='md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-5'>
          <CardContent>
            <div className='flex flex-col items-center justify-center text-lg font-semibold'>
              <p>Hello,</p>
              <p className='-my-2'>I’m Gole Layla, an Award-Winning</p>
              <p>Product Designer</p>
            </div>

            <p className='font-light text-sm text-center'>
              As a skilled Product designer, illustrator, and visual development expert, my diverse background has allowed me to apply my talents across different fields and industries, demonstrating adaptability and versatility.
            </p>
          </CardContent>
        </Card>

        <Card className='md:col-start-1 md:col-end-5 md:row-start-5 md:row-end-10'>
          <CardContent>
            <CardTitle className='text-lg font-medium text-start w-full'>
              My Experience
            </CardTitle>
            <ul className='w-full font-light text-sm flex flex-col gap-4'>
              <li className='flex w-full justify-start items-center'>
                <ChevronsRightIcon />
                <p>2021 // Now  UI Designer Apple</p>
              </li>
              <li className='flex w-full justify-start items-center'>
                <ChevronsRightIcon />
                <p>2015 // 2020 Front-end Dev Google</p>
              </li>
              <li className='flex w-full justify-start items-center'>
                <ChevronsRightIcon />
                <p>2010 // 2015 UI/UX Designer Intel</p>
              </li>
              <li className='flex w-full justify-start items-center'>
                <ChevronsRightIcon />
                <p>2009 // 2010 UI Designer Intel</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className='md:col-start-5 md:col-end-9 md:row-start-5 md:row-end-10'>
          <CardContent>
            <CardTitle className='text-lg font-medium text-start w-full'>
              What I Do
            </CardTitle>
            <ul className='w-full font-light text-sm flex flex-col gap-4'>
              <li className='flex w-full justify-start items-center'>
                <ChevronsRightIcon />
                <p>Branding</p>
              </li>
              <li className='flex w-full justify-start items-center'>
                <ChevronsRightIcon />
                <p>Illustration</p>
              </li>
              <li className='flex w-full justify-start items-center'>
                <ChevronsRightIcon />
                <p>Logo Design</p>
              </li>
              <li className='flex w-full justify-start items-center'>
                <ChevronsRightIcon />
                <p>Typography</p>
              </li>
              <li className='flex w-full justify-start items-center'>
                <ChevronsRightIcon />
                <p>Card Design</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className='md:col-start-9 md:col-end-13 md:row-start-5 md:row-end-10'>
          <CardContent>
            <CardTitle className='text-lg font-medium text-start w-full'>
              Education
            </CardTitle>
            <div className='w-full font-light text-sm'>
              <p className='text-primary'>2015 - 2019</p>
              <p>Bachelor Degree in Psychology</p>
              <p>University of California</p>
            </div>
            <div className='w-full font-light text-sm'>
              <p className='text-primary'>2015 - 2019</p>
              <p>Master Degree in Designing</p>
              <p>University of California</p>
            </div>
          </CardContent>
        </Card>

        <div className='md:col-start-7 md:col-end-13 md:row-start-10 md:row-end-13'>
          <ContactCard/>
        </div>

        <div className='md:col-start-1 md:col-end-7 md:row-start-10 md:row-end-13'>
          <Card className='h-full'>
            <CardContent
              className='grid grid-cols-2 md:grid-cols-4'>
              {experiences.map((experience) => (
                <ExperienceItem
                  key={experience.description}
                  quantity={experience.quantity}
                  description={experience.description} />
              ))}
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}

export default AboutPage;