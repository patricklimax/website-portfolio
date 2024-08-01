import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';

const Footer = () => {
  return (
    <footer className='mx-auto max-w-5xl shadow-sm mb-6 '>
      <div className='py-4' >
        <Separator />
      </div>
      <p className='text-center text-xs'>
        Criado por <span className='text-primary font-bold'>Patrick Lima</span>
      </p>
    </footer>
  );
}

export default Footer;