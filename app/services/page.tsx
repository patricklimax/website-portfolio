import ContactCard from '@/components/contact';
import { ExperienceItem, experiences } from '@/components/experience';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { IconVectorBezier } from '@tabler/icons-react';
import { MoveLeftIcon } from 'lucide-react';
import Link from 'next/link';

const ServicesPage = () => {
  return (
    <section className='mx-auto max-w-5xl'>
      <Link href={'/'} className='flex mb-8'>
        <Button className='bg-primary hover:bg-primary/85 '>
          <MoveLeftIcon />
          <span className='ml-2 text-base font-bold'>Home</span>
        </Button>
      </Link>

      <div className='w-full grid grid-cols-1 gap-4 md:grid md:grid-cols-12 md:grid-rows-11 md:h-[696px]'>
        <Card className='md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-5'>
          <CardContent>
            <div className='w-full flex items-center gap-4'>
              <CardTitle className='flex-1 text-lg font-medium text-center w-full flex flex-col'>
                <span>UI/UX</span>
                <span className='ml-12'>Design</span>
              </CardTitle>

              <div className='flex-1 flex items-center justify-center'>
                <span className='rounded-full border place-items-start w-fit p-3 border-[#9747FF] text-[#9747FF]'>
                  <IconVectorBezier size={50} className='stroke-1' />
                </span>
              </div>
            </div>

            <p className='font-light text-sm'>
              Welcome to our UI/UX Design Showcase, where creativity meets functionality. Dive world where user experience is paramount, and portfolio and witness the art of user-centric design that elevates digital experiences to new heights.
            </p>
          </CardContent>
        </Card>

        <Card className='md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-5'>
          <CardContent>
            <div className='w-full flex items-center gap-4'>
              <CardTitle className='flex-1 text-lg font-medium text-center w-full flex flex-col'>
                <span>Digital</span>
                <span className='ml-12'>Marketing</span>
              </CardTitle>

              <div className='flex-1 flex items-center justify-center'>
                <span className='rounded-full border place-items-start w-fit p-3 border-[#CDFF00] text-[#CDFF00]'>
                  <IconVectorBezier size={50} className='stroke-1' />
                </span>
              </div>
            </div>

            <p className='font-light text-sm'>
              Unlock your brands potential with Digital Marketing expertise. From strategic campaigns to engaging content, we navigate the digital landscape to elevate your online presence and drive meaningful connections.
            </p>
          </CardContent>
        </Card>

        <Card className='md:col-start-1 md:col-end-7 md:row-start-5 md:row-end-9'>
          <CardContent>
            <div className='w-full flex items-center gap-4'>
              <CardTitle className='flex-1 text-lg font-medium text-center w-full flex flex-col'>
                <span>Brand</span>
                <span className='ml-12'>Identity</span>
              </CardTitle>

              <div className='flex-1 flex items-center justify-center'>
                <span className='rounded-full border place-items-start w-fit p-3 border-[#FFCE32] text-[#FFCE32]'>
                  <IconVectorBezier size={50} className='stroke-1' />
                </span>
              </div>
            </div>

            <p className='font-light text-sm'>
              Crafting brand identities that resonate. Our Brand Identity portfolio showcases unique logos, color schemes, and style guides that leave a lasting impression, defining your brand with visual excellence.
            </p>
          </CardContent>
        </Card>

        <Card className='md:col-start-7 md:col-end-13 md:row-start-5 md:row-end-9'>
          <CardContent>
            <div className='w-full flex items-center gap-4'>
              <CardTitle className='flex-1 text-lg font-medium text-center w-full flex flex-col'>
                <span>Web</span>
                <span className='ml-12'>Development</span>
              </CardTitle>

              <div className='flex-1 flex items-center justify-center'>
                <span className='rounded-full border place-items-start w-fit p-3 border-[#FF6900] text-[#FF6900]'>
                  <IconVectorBezier size={50} className='stroke-1' />
                </span>
              </div>
            </div>

            <p className='font-light text-sm'>
              Elevate your online presence with Web Development expertise. portfolio showcases visually stunning and functionally robust websites, meticulously crafted captivate audiences and drive digital success.
            </p>
          </CardContent>
        </Card>

        <div className='md:col-start-1 md:col-end-7 md:row-start-9 md:row-end-12'>
          <Card className='h-full'>
            <CardContent
              className='grid grid-cols-2 md:grid-cols-4 '>
              {experiences.map((experience) => (
                <ExperienceItem
                  key={experience.description}
                  quantity={experience.quantity}
                  description={experience.description} />
              ))}
            </CardContent>
          </Card>
        </div>

        <div className='md:col-start-7 md:col-end-13 md:row-start-9 md:row-end-12'>
          <ContactCard />
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;