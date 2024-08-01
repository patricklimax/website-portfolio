import Link from 'next/link';
import { Logotipo } from './logotipo';
import { ToggleModeTheme } from './toggle-mode-theme';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { MenuIcon, TextIcon } from 'lucide-react';
import { Separator } from './ui/separator';
import NavBar from './navbar';

const Header = () => {
  return (
    <header className='mx-auto max-w-5xl'>
      <Card className='mx-auto max-w-5xl'>
        <CardContent className='w-full p-4 flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <div className='md:hidden'>
              <Sheet>
                <SheetTrigger asChild>
                  <Button size={'icon'} variant={'outline'}>
                    <TextIcon />
                  </Button>
                </SheetTrigger>
                <SheetContent side={'left'}>
                  <SheetHeader>
                    <SheetTitle>
                      <Logotipo />
                    </SheetTitle>

                    <div className='py-4' >
                      <Separator />
                    </div>

                    <div>
                      <NavBar />
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <div>
              <Logotipo />
            </div>
          </div>
          {/* <NavMenu /> */}


          <ToggleModeTheme />
        </CardContent>
      </Card>
    </header >
  );
}

export default Header;