import { TextIcon } from 'lucide-react';
import { Logotipo } from './logotipo';
import { NavBarDesktop, NavBarMobile } from './navbar';
import { ToggleModeTheme } from './toggle-theme';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

const Header = () => {
	return (
		<header className='mx-auto mb-8 max-w-5xl'>
			<Card className='mx-auto max-w-5xl'>
				<CardContent className='w-full flex-row justify-between p-4'>
					<div className='flex items-center gap-4'>
						<div className='md:hidden'>
							<Sheet>
								<SheetTrigger asChild>
									<Button
										size={'icon'}
										variant={'outline'}>
										<TextIcon />
									</Button>
								</SheetTrigger>
								<SheetContent side={'left'}>
									<SheetHeader>
										<SheetTitle>
											<SheetClose asChild>
												<Logotipo />
											</SheetClose>
										</SheetTitle>

										<div className='py-4'>
											<Separator />
										</div>

										<div>
											<NavBarMobile />
										</div>
									</SheetHeader>
								</SheetContent>
							</Sheet>
						</div>
						<div>
							<Logotipo />
						</div>
					</div>

					<div className='hidden md:block'>
						<NavBarDesktop />
					</div>

					<ToggleModeTheme />
				</CardContent>
			</Card>
		</header>
	);
};

export default Header;
