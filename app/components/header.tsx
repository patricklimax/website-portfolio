import { Logotipo } from './logotipo';
import { ToggleModeTheme } from './toggle-theme';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { TextIcon } from 'lucide-react';
import { Separator } from './ui/separator';
import { NavBarDesktop, NavBarMobile } from './navbar';

const Header = () => {
	return (
		<header className="mx-auto max-w-5xl mb-8">
			<Card className="mx-auto max-w-5xl">
				<CardContent className="w-full p-4 flex-row justify-between">
					<div className="flex items-center gap-4">
						<div className="md:hidden">
							<Sheet>
								<SheetTrigger asChild>
									<Button size={'icon'} variant={'outline'}>
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

										<div className="py-4">
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

					<div className="hidden md:block">
						<NavBarDesktop />
					</div>

					<ToggleModeTheme />
				</CardContent>
			</Card>
		</header>
	);
};

export default Header;
